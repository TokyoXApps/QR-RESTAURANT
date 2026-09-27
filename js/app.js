// Core App Utilities & Web Audio Sound Player (Global scope for file:// protocol)
(function() {
  window.playChimeSound = function(type = 'bell') {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'ready') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.8);
      } else if (type === 'call') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(830.61, ctx.currentTime); // Ab5
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 1.2);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(660, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (err) {
      console.warn('Audio play error:', err);
    }
  };

  // Seed initial Firebase database content if first time
  window.seedInitialDataIfEmpty = async function() {
    if (!window.db) return;
    try {
      const settingsSnap = await window.db.ref('settings').once('value');
      if (!settingsSnap.exists()) {
        console.log('Seeding initial data into Firebase Realtime Database...');

        await window.db.ref('settings').set({
          restaurant_name: 'QR Restaurant',
          currency: 'د.ج',
          admin_code: '1234',
          receipt_footer: 'شكراً لزيارتكم! نتمنى لكم يوماً سعيداً'
        });

        await window.db.ref('users').set({
          user_admin: { username: 'admin', password: 'admin', role: 'admin', created_at: Date.now() },
          user_kitchen: { username: 'kitchen', password: '123', role: 'kitchen', created_at: Date.now() },
          user_cashier: { username: 'cashier', password: '123', role: 'cashier', created_at: Date.now() },
          user_waiter: { username: 'waiter', password: '123', role: 'waiter', created_at: Date.now() }
        });

        await window.db.ref('categories').set({
          cat_1: { id: 'cat_1', name: 'الأطباق الرئيسية', sort_order: 1 },
          cat_2: { id: 'cat_2', name: 'المشروبات والعصائر', sort_order: 2 },
          cat_3: { id: 'cat_3', name: 'الحلويات', sort_order: 3 }
        });

        await window.db.ref('products').set({
          prod_1: {
            id: 'prod_1',
            category_id: 'cat_1',
            name: 'بيتزا مارغريتا إيطالية',
            description: 'صلصة طماطم طازجة، جبنة موزاريلا، وحبق طازج',
            price: 850,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80',
            available: true
          },
          prod_2: {
            id: 'prod_2',
            category_id: 'cat_1',
            name: 'برغر لحم دبل تشيز',
            description: 'قطعتين لحم بقر مشوي مع جبنة شيدر وصلصة خاصة',
            price: 950,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
            available: true
          },
          prod_3: {
            id: 'prod_3',
            category_id: 'cat_2',
            name: 'عصير برتقال طبيعي',
            description: 'عصير برتقال طازج 100%',
            price: 350,
            image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=80',
            available: true
          },
          prod_4: {
            id: 'prod_4',
            category_id: 'cat_3',
            name: 'كيك الشوكولاتة الفاخر',
            description: 'قطعة كيك شوكولاتة غنية بصلصة الفادج',
            price: 450,
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80',
            available: true
          }
        });

        await window.db.ref('tables').set({
          table_1: { id: 'table_1', number: 1, name: 'طاولة 1', status: 'AVAILABLE' },
          table_2: { id: 'table_2', number: 2, name: 'طاولة 2', status: 'AVAILABLE' },
          table_3: { id: 'table_3', number: 3, name: 'طاولة 3', status: 'AVAILABLE' },
          table_4: { id: 'table_4', number: 4, name: 'طاولة 4', status: 'AVAILABLE' }
        });

        console.log('Firebase seed completed successfully!');
      }
    } catch (err) {
      console.error('Failed to seed initial data:', err);
    }
  };

  // Auth Guard Helper
  window.requireAuthGuard = function(allowedRole) {
    const rawUser = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
    if (!rawUser) {
      window.location.href = 'login.html';
      return null;
    }
    try {
      const user = JSON.parse(rawUser);
      if (allowedRole && user.role !== 'admin' && user.role !== allowedRole) {
        alert('⛔ غير مصرح لك بالوصول لجميع هذه الصفحة!');
        window.location.href = 'login.html';
        return null;
      }
      return user;
    } catch (e) {
      window.location.href = 'login.html';
      return null;
    }
  };

  window.logoutUser = function() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  };

  // Get or Create Persistent Device ID
  window.getClientDeviceId = function() {
    let deviceId = localStorage.getItem('qr_device_id');
    if (!deviceId) {
      deviceId = 'DEV-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString(36);
      localStorage.setItem('qr_device_id', deviceId);
    }
    return deviceId;
  };

  // Fetch Public IP Address
  window.getClientIp = async function() {
    const cachedIp = sessionStorage.getItem('qr_user_ip');
    if (cachedIp) return cachedIp;

    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      if (data && data.ip) {
        sessionStorage.setItem('qr_user_ip', data.ip);
        return data.ip;
      }
    } catch (e) {
      console.warn('Could not fetch IP address:', e);
    }
    return 'Unknown-IP';
  };

  // Listen to Global Settings (Restaurant Name, Currency, WiFi, Phone, etc.)
  window.listenGlobalSettings = function(customCallback) {
    if (!window.db) return;
    window.db.ref('settings').on('value', (snap) => {
      const settings = snap.val() || {};
      const restName = settings.restaurant_name || 'QR Restaurant';
      
      // Update DOM Elements for Restaurant Name
      document.querySelectorAll('[data-restaurant-name]').forEach(el => {
        el.textContent = restName;
      });
      document.querySelectorAll('[data-i18n="restaurant_name"]').forEach(el => {
        el.textContent = restName;
      });
      
      const restHeader = document.getElementById('restaurantNameHeader');
      if (restHeader) restHeader.textContent = restName;

      // Update Page Title
      if (document.title.includes('-')) {
        const parts = document.title.split('-');
        document.title = `${parts[0].trim()} - ${restName}`;
      }

      if (typeof customCallback === 'function') {
        customCallback(settings);
      }
    });
  };

  // Calculate Distance in Meters between two GPS coordinates (Haversine Formula)
  window.calculateDistanceMeters = function(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Radius of Earth in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in meters
  };

  // Get Current GPS Coordinates with Persistent LocalStorage Cache (30 min retention)
  function saveGpsToStorage(pos) {
    try {
      localStorage.setItem('qr_verified_gps', JSON.stringify({
        lat: pos.lat,
        lng: pos.lng,
        time: Date.now()
      }));
    } catch(e){}
  }

  function loadGpsFromStorage() {
    try {
      const data = localStorage.getItem('qr_verified_gps');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.lat && parsed.lng && (Date.now() - parsed.time < 1800000)) { // 30 minutes validity
          return { lat: parsed.lat, lng: parsed.lng };
        }
      }
    } catch(e){}
    return null;
  }

  let cachedUserPos = loadGpsFromStorage();

  window.getUserLocation = function(forceRefresh = false) {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('الجي بي إس (GPS) غير مدعوم في متصفحك!'));
        return;
      }

      // Check persistent memory (localStorage) first if fresh (< 30 mins)
      if (!forceRefresh) {
        const stored = loadGpsFromStorage();
        if (stored) {
          cachedUserPos = stored;
          return resolve(cachedUserPos);
        }
      }

      // Fast Mobile Mode: Network/WiFi location first, fallback to satellite high accuracy
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          cachedUserPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          saveGpsToStorage(cachedUserPos);
          resolve(cachedUserPos);
        },
        (errLow) => {
          console.warn('Fast location failed, trying high accuracy fallback...', errLow);
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              cachedUserPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
              saveGpsToStorage(cachedUserPos);
              resolve(cachedUserPos);
            },
            (errHigh) => {
              let msg = 'يرجى تفعيل خدمة الموقع الجغرافي بالهاتف وإعطاء الإذن للمتصفح.';
              if (errHigh.code === errHigh.PERMISSION_DENIED) msg = 'تم رفض إذن الوصول للموقع الجغرافي. يرجى السماح للمتصفح بالوصول للموقع في إعدادات الهاتف.';
              else if (errHigh.code === errHigh.POSITION_UNAVAILABLE) msg = 'تعذر تحديد موقعك الجغرافي حالياً. أعد تفعيل الـ GPS بالهاتف.';
              else if (errHigh.code === errHigh.TIMEOUT) msg = 'انتهت مهلة الاستجابة. يرجى التأكد من تشغيل الـ GPS بالهاتف وإعادة المحاولة.';
              reject(new Error(msg));
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 1800000 }
          );
        },
        { enableHighAccuracy: false, timeout: 3000, maximumAge: 1800000 }
      );
    });
  };

  // Custom In-App Styled Modal Dialog System (Replaces Native Chrome Popups)
  window.showCustomModal = function(options) {
    return new Promise((resolve) => {
      let container = document.getElementById('globalCustomModalOverlay');
      if (!container) {
        container = document.createElement('div');
        container.id = 'globalCustomModalOverlay';
        container.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md hidden transition-all duration-300 font-cairo';
        container.innerHTML = `
          <div id="globalCustomModalCard" class="bg-[#151c2c] border border-slate-800 rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 text-center transform scale-90 opacity-0 transition-all duration-300">
            <div id="globalModalIcon" class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              ℹ️
            </div>
            <div class="space-y-1.5">
              <h3 id="globalModalTitle" class="font-extrabold text-base text-white">تنبيه</h3>
              <p id="globalModalMessage" class="text-xs text-slate-300 font-semibold leading-relaxed whitespace-pre-line"></p>
            </div>
            <div id="globalModalButtons" class="flex gap-2 pt-2">
              <button id="globalModalBtnCancel" class="hidden flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition-all">
                إلغاء
              </button>
              <button id="globalModalBtnConfirm" class="flex-1 py-3 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white font-black text-xs rounded-xl shadow-lg shadow-orange-950/50 transition-all">
                موافق
              </button>
            </div>
          </div>
        `;
        document.body.appendChild(container);
      }

      const titleEl = document.getElementById('globalModalTitle');
      const msgEl = document.getElementById('globalModalMessage');
      const iconEl = document.getElementById('globalModalIcon');
      const cardEl = document.getElementById('globalCustomModalCard');
      const btnConfirm = document.getElementById('globalModalBtnConfirm');
      const btnCancel = document.getElementById('globalModalBtnCancel');

      const title = options.title || 'تنبيه';
      const message = options.message || '';
      const type = options.type || 'info';
      const confirmText = options.confirmText || 'حسناً';
      const cancelText = options.cancelText || 'إلغاء';

      titleEl.textContent = title;
      msgEl.textContent = message;
      btnConfirm.textContent = confirmText;
      btnCancel.textContent = cancelText;

      if (type === 'error') {
        iconEl.textContent = '⛔';
        iconEl.className = 'w-16 h-16 mx-auto bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-rose-950/30';
      } else if (type === 'success') {
        iconEl.textContent = '🎉';
        iconEl.className = 'w-16 h-16 mx-auto bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-emerald-950/30';
      } else if (type === 'warning' || type === 'confirm') {
        iconEl.textContent = '⚠️';
        iconEl.className = 'w-16 h-16 mx-auto bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-amber-950/30';
      } else {
        iconEl.textContent = 'ℹ️';
        iconEl.className = 'w-16 h-16 mx-auto bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-orange-950/30';
      }

      if (type === 'confirm') {
        btnCancel.classList.remove('hidden');
      } else {
        btnCancel.classList.add('hidden');
      }

      container.classList.remove('hidden');
      setTimeout(() => {
        cardEl.classList.remove('scale-90', 'opacity-0');
        cardEl.classList.add('scale-100', 'opacity-100');
      }, 10);

      function closeModal(result) {
        cardEl.classList.remove('scale-100', 'opacity-100');
        cardEl.classList.add('scale-90', 'opacity-0');
        setTimeout(() => {
          container.classList.add('hidden');
          resolve(result);
        }, 200);
      }

      btnConfirm.onclick = () => closeModal(true);
      btnCancel.onclick = () => closeModal(false);
    });
  };

  // Override Native Browser Alert & Confirm
  window.alert = function(msg) {
    const textMsg = String(msg || '');
    let type = 'info';
    let title = 'إشعار';

    if (textMsg.includes('⛔') || textMsg.includes('خطأ') || textMsg.includes('رفض') || textMsg.includes('بعيد')) {
      type = 'error';
      title = 'تنبيه مهم';
    } else if (textMsg.includes('نجاح') || textMsg.includes('✔️') || textMsg.includes('🎉') || textMsg.includes('تأكيد')) {
      type = 'success';
      title = 'تم بنجاح';
    } else if (textMsg.includes('⚠️')) {
      type = 'warning';
      title = 'تحذير';
    }

    return window.showCustomModal({
      title: title,
      message: textMsg,
      type: type,
      confirmText: 'حسناً'
    });
  };

  window.confirm = function(msg) {
    return window.showCustomModal({
      title: 'تأكيد الإجراء',
      message: String(msg || ''),
      type: 'confirm',
      confirmText: 'تأكيد',
      cancelText: 'إلغاء'
    });
  };
})();
