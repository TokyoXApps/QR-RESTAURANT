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
})();
