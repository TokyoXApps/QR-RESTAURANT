// Full Multi-Language i18n Engine for QR Restaurant (AR, FR, EN)
(function() {
  const translations = {
    ar: {
      // General & Header
      restaurant_name: 'QR Restaurant',
      order_from_table: 'طلب من الطاولة',
      staff_area: 'فضاء الموظفين',
      login_subtitle: 'تسجيل الدخول باستخدام بيانات حساب الأدمن، المطبخ، الكاشير أو النادل',
      username: 'اسم المستخدم',
      password: 'كلمة السر',
      login: 'تسجيل الدخول',
      logout: 'خروج 🚪',
      demo_accounts: '🔑 الحسابات التجريبية (Demo):',
      admin_code_required: 'رمز أمان الأدمن المطلوب',
      admin_code_subtitle: 'يرجى إدخال كود الأمان للوصول إلى لوحة التحكم (الافتراضي: 1234)',
      cancel: 'إلغاء',
      confirm_login: 'تأكيد الدخول',

      // Menu & Index
      live_order_status: 'حالة الطلب المباشرة',
      call_waiter: 'استدعاء النادل',
      request_bill: 'طلب الحساب',
      call_waiter_sent: 'تم تنبيه النادل، سيعود إليك فوراً!',
      request_bill_sent: 'تم إرسال طلب الحساب للكاشير!',
      all: 'الكل',
      add_to_cart: 'إضافة للطلب',
      cart_total: 'الإجمالي',
      view_cart: 'عرض السلة 👈',
      cart_title: 'سلة الطلبات',
      cart_empty: 'سلتك فارغة حالياً',
      order_notes: 'ملاحظات عامة حول الطلب',
      order_notes_placeholder: 'ملاحظات عامة (مثلاً: إحضار شوكة إضافية)...',
      item_notes_placeholder: 'ملاحظات الوجبة (مثلاً: بدون بصل)...',
      final_total: 'الإجمالي النهائي:',
      submit_order: 'تأكيد وإرسال الطلب 🚀',
      order_success_title: 'تم إرسال طلبك بنجاح!',

      // Statuses
      status_NEW: 'جديد 🆕',
      status_ACCEPTED: 'مقبول 👍',
      status_PREPARING: 'قيد التحضير 👨‍🍳',
      status_READY: 'الطلب جاهز 🟢',
      status_SERVED: 'تم التقديم 🍽️',
      status_PAID: 'مدفوع 💳',
      status_CANCELLED: 'ملغي ❌',
      currency: 'د.ج',

      // Kitchen Page
      kitchen_title: 'شاشة المطبخ المباشرة',
      kitchen_subtitle: 'تتبع وإعداد طلبات المطبخ فورياً',
      call_waiter_btn: 'استدعاء النادل للمطبخ',
      accept_order: 'قبول الطلب 👍',
      start_preparing: 'بدء التحضير 👨‍🍳',
      order_ready: 'الطلب جاهز 🟢',
      no_kitchen_orders: 'لا توجد طلبات نشطة في المطبخ حالياً 🎉',
      kitchen_call_sent: 'تم إرسال إشعار للنادل للحضور إلى المطبخ!',

      // Cashier Page
      cashier_title: 'شاشة الكاشير والتحصيل',
      cashier_subtitle: 'إدارة الطاولات، تحصيل المبالغ وإصدار الفواتير',
      todays_revenue: 'مداخيل اليوم',
      todays_orders: 'طلبات اليوم',
      open_tables: 'الطاولات المشغولة',
      pay_and_close: 'تسوية ودفع (Pay & Close)',
      order_ready_alert: 'الطلب جاهز للتسليم! (ORDER READY)',
      no_cashier_orders: 'لا توجد طلبات نشطة في الكاشير حالياً',
      settle_invoice: 'تسوية الفاتورة',
      payment_method: 'طريقة الدفع',
      amount_received: 'المبلغ المستلم',
      change_due: 'الباقي للزبون (Monnaie):',
      print_invoice: '🖨️ طباعة',
      confirm_and_close: 'تأكيد وإغلاق ✔️',
      cash: 'نقداً (Cash)',
      card: 'بطاقة (Card)',
      other: 'أخرى (Other)',

      // Waiter Page
      waiter_title: 'شاشة النادل والخدمة',
      waiter_subtitle: 'تلقي استدعاءات الزبائن والمطبخ وتتبع تقديم الوجبات',
      live_alerts: 'التنبيهات الفورية المباشرة (Active Alerts)',
      no_active_alerts: 'لا توجد تنبيهات حالية من الزبائن أو المطبخ ✨',
      live_orders_table: 'جدول الطلبات المباشرة (Live Orders)',
      filter_all: 'الكل',
      filter_ready: 'جاهز 🟢',
      filter_served: 'تم التقديم 🍽️',
      confirm_served: 'تأكيد تقديم الوجبة للزبون 🍽️',
      kitchen_calling_waiter: '👨‍🍳 المطبخ يستدعي النادل!',
      customer_calling_waiter: '🔔 استدعاء من الزبون',
      customer_requesting_bill: '💳 الزبون يطلب الحساب!',
      action_done: 'تم التلبية ✔️',

      // Admin Dashboard Page
      admin_title: 'لوحة تحكم المدير الشاملة',
      admin_subtitle: 'تحليلات الأرباح، سجل الطلبات الكامل، إدارة المنتجات، الطاولات والموظفين',
      tab_overview: '📊 الإحصائيات المباشرة',
      tab_orders_log: '📋 سجل جميع الطلبات',
      tab_products: '🍔 المنتجات',
      tab_categories: '📁 التصنيفات',
      tab_tables: '🪑 الطاولات والـ QR',
      tab_users: '👥 الموظفين',
      tab_settings: '⚙️ الإعدادات والكود',

      // Admin Overview Stats
      total_revenue: 'إجمالي الأرباح (Total Revenue)',
      today_revenue: 'مداخيل اليوم:',
      total_orders_stat: 'إجمالي الطلبات (Total Orders)',
      paid_orders_stat: 'الطلبات المدفوعة:',
      table_occupancy: 'نسبة إشغال الطاولات',
      occupied_now: 'مشغولة حالياً',
      products_categories_stat: 'المنتجات والتصنيفات',
      categories_active: 'تصنيفات مفعلة',
      top_best_sellers: 'الأطباق والوجبات الأكثر مبيعاً (Top Best Sellers)',
      sorted_by_qty: 'مرتبة بحسب الكمية المباعة',
      payment_breakdown: 'توزيع طرق الدفع (Payments)',
      cash_sales: '💵 الدفع نقداً (Cash):',
      card_sales: '💳 الدفع بالبطاقة (Card):',
      other_sales: '🔄 طرق أخرى (Other):',

      // Admin Orders Master Log
      orders_log_title: 'سجل جميع الطلبات والفواتير (Orders Master Log)',
      search_placeholder: 'بحث برقم الطلب أو الطاولة...',
      all_statuses: 'جميع الحالات',
      th_order_id: 'رقم الطلب',
      th_table_num: 'رقم الطاولة',
      th_items_qty: 'عدد الوجبات',
      th_total: 'المبلغ الإجمالي',
      th_status: 'الحالة',
      th_payment_method: 'طريقة الدفع',
      th_date: 'التاريخ والوقت',
      th_details: 'التفاصيل',
      view_receipt: '📄 صك',

      // Admin Actions & Modals
      add_new_product: '➕ إضافة منتج جديد',
      edit_product: '✏️ تعديل منتج',
      add_new_category: '➕ إضافة تصنيف جديد',
      edit_category: '✏️ تعديل تصنيف',
      add_new_table: '➕ إضافة طاولة جديد',
      add_new_staff: '➕ إضافة حساب موظف',
      edit_staff: '✏️ تعديل حساب الموظف',
      save_changes: 'حفظ التغييرات 💾',
      settings_title: 'إعدادات المطعم وكود الأمان',
      admin_code_label: 'رمز أمان الأدمن (Admin Code)',
      admin_code_hint: 'يُطلب عند إدخال حساب admin / admin لحماية لوحة التحكم',
      role_admin: 'المدير 🟣',
      role_kitchen: 'المطبخ 🟠',
      role_cashier: 'الكاشير 🔵',
      role_waiter: 'النادل / الخدمة 🟢',
      delete: 'حذف',
      edit: 'تعديل',
      save: 'حفظ',
      
      name_ar: 'الاسم بالعربية 🇸🇦',
      name_fr: 'Nom en Français 🇫🇷',
      name_en: 'Name in English 🇬🇧',
      desc_ar: 'الوصف بالعربية 🇸🇦',
      desc_fr: 'Description en Français 🇫🇷',
      desc_en: 'Description in English 🇬🇧'
    },
    fr: {
      restaurant_name: 'QR Restaurant',
      order_from_table: 'Commande de la Table',
      staff_area: 'Espace Espace Personnel',
      login_subtitle: 'Connectez-vous avec vos identifiants Admin, Cuisine, Caisse ou Serveur',
      username: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      login: 'Se Connecter',
      logout: 'Déconnexion 🚪',
      demo_accounts: '🔑 Comptes Démo:',
      admin_code_required: 'Code de Sécurité Admin Requis',
      admin_code_subtitle: 'Veuillez saisir le code de sécurité Admin (Par défaut: 1234)',
      cancel: 'Annuler',
      confirm_login: 'Valider la Connexion',

      live_order_status: 'Suivi de Commande en Direct',
      call_waiter: 'Appeler Serveur',
      request_bill: 'Demander l\'Addition',
      call_waiter_sent: 'Le serveur a été notifié !',
      request_bill_sent: 'Demande d\'addition envoyée à la caisse !',
      all: 'Tous',
      add_to_cart: 'Ajouter au Panier',
      cart_total: 'Total',
      view_cart: 'Voir le Panier 👈',
      cart_title: 'Panier de Commande',
      cart_empty: 'Votre panier est vide',
      order_notes: 'Remarques Générales sur la Commande',
      order_notes_placeholder: 'Remarques (ex: fourchette supplémentaire)...',
      item_notes_placeholder: 'Remarques sur le plat (ex: sans oignon)...',
      final_total: 'Total Final:',
      submit_order: 'Confirmer & Envoyer la Commande 🚀',
      order_success_title: 'Commande envoyée avec succès!',

      status_NEW: 'Nouveau 🆕',
      status_ACCEPTED: 'Accepté 👍',
      status_PREPARING: 'En Préparation 👨‍🍳',
      status_READY: 'Prête 🟢',
      status_SERVED: 'Servie 🍽️',
      status_PAID: 'Payée 💳',
      status_CANCELLED: 'Annulée ❌',
      currency: 'DA',

      kitchen_title: 'Écran de Cuisine en Direct',
      kitchen_subtitle: 'Suivi et préparation des commandes en temps réel',
      call_waiter_btn: 'Appeler le Serveur en Cuisine',
      accept_order: 'Accepter 🏆',
      start_preparing: 'Commencer Préparation 👨‍🍳',
      order_ready: 'Commande Prête 🟢',
      no_kitchen_orders: 'Aucune commande active en cuisine 🎉',
      kitchen_call_sent: 'Serveur notifié pour venir en cuisine !',

      cashier_title: 'Écran Caisse & Encaissement',
      cashier_subtitle: 'Gestion des tables, encaissement et facturation',
      todays_revenue: 'Recette du Jour',
      todays_orders: 'Commandes du Jour',
      open_tables: 'Tables Occupées',
      pay_and_close: 'Encaisser & Fermer (Pay & Close)',
      order_ready_alert: 'COMMANDE PRÊTE À LIVRER !',
      no_cashier_orders: 'Aucune commande active en caisse',
      settle_invoice: 'Règlement de la Facture',
      payment_method: 'Mode de Paiement',
      amount_received: 'Montant Reçu',
      change_due: 'Monnaie à Rendre:',
      print_invoice: '🖨️ Imprimer',
      confirm_and_close: 'Confirmer & Clôturer ✔️',
      cash: 'Espèces (Cash)',
      card: 'Carte (Card)',
      other: 'Autre (Other)',

      waiter_title: 'Écran Serveur & Service',
      waiter_subtitle: 'Réception des appels clients/cuisine et suivi des services',
      live_alerts: 'Alertes Instantanées (Active Alerts)',
      no_active_alerts: 'Aucune alerte en attente ✨',
      live_orders_table: 'Tableau des Commandes Directes',
      filter_all: 'Tous',
      filter_ready: 'Prête 🟢',
      filter_served: 'Servie 🍽️',
      confirm_served: 'Confirmer le Service 🍽️',
      kitchen_calling_waiter: '👨‍🍳 La cuisine appelle le serveur!',
      customer_calling_waiter: '🔔 Appel Client',
      customer_requesting_bill: '💳 Le client demande l\'addition!',
      action_done: 'Traité ✔️',

      admin_title: 'Tableau de Bord Exécutif Admin',
      admin_subtitle: 'Analyses des revenus, historique complet, produits, tables et personnel',
      tab_overview: '📊 Statistiques Directes',
      tab_orders_log: '📋 Historique des Commandes',
      tab_products: '🍔 Produits',
      tab_categories: '📁 Catégories',
      tab_tables: '🪑 Tables & QR',
      tab_users: '👥 Personnel',
      tab_settings: '⚙️ Configuration & Code',

      total_revenue: 'Recette Totale (Total Revenue)',
      today_revenue: 'Recette d\'aujourd\'hui:',
      total_orders_stat: 'Total Commandes (Total Orders)',
      paid_orders_stat: 'Commandes Payées:',
      table_occupancy: 'Taux d\'Occupation Tables',
      occupied_now: 'occupées actuellement',
      products_categories_stat: 'Produits & Catégories',
      categories_active: 'catégories actives',
      top_best_sellers: 'Meilleures Ventes (Top Best Sellers)',
      sorted_by_qty: 'Trié par quantité vendue',
      payment_breakdown: 'Répartition des Paiements',
      cash_sales: '💵 En Espèces (Cash):',
      card_sales: '💳 Par Carte (Card):',
      other_sales: '🔄 Autres Modes:',

      orders_log_title: 'Historique Complet des Commandes',
      search_placeholder: 'Rechercher commande ou table...',
      all_statuses: 'Tous les Statuts',
      th_order_id: 'N° Commande',
      th_table_num: 'N° Table',
      th_items_qty: 'Plats',
      th_total: 'Montant Total',
      th_status: 'Statut',
      th_payment_method: 'Paiement',
      th_date: 'Date & Heure',
      th_details: 'Détails',
      view_receipt: '📄 Reçu',

      add_new_product: '➕ Nouveau Produit',
      edit_product: '✏️ Modifier Produit',
      add_new_category: '➕ Nouvelle Catégorie',
      edit_category: '✏️ Modifier Catégorie',
      add_new_table: '➕ Ajouter Table',
      add_new_staff: '➕ Ajouter Personnel',
      edit_staff: '✏️ Modifier Personnel',
      save_changes: 'Enregistrer 💾',
      settings_title: 'Configuration Restaurant & Sécurité',
      admin_code_label: 'Code de Sécurité Admin',
      admin_code_hint: 'Requis lors de la connexion admin / admin',
      role_admin: 'Admin 🟣',
      role_kitchen: 'Cuisine 🟠',
      role_cashier: 'Caisse 🔵',
      role_waiter: 'Serveur 🟢',
      delete: 'Supprimer',
      edit: 'Modifier',
      save: 'Enregistrer',

      name_ar: 'Nom en Arabe 🇸🇦',
      name_fr: 'Nom en Français 🇫🇷',
      name_en: 'Nom en Anglais 🇬🇧',
      desc_ar: 'Description en Arabe 🇸🇦',
      desc_fr: 'Description en Français 🇫🇷',
      desc_en: 'Description en Anglais 🇬🇧'
    },
    en: {
      restaurant_name: 'QR Restaurant',
      order_from_table: 'Order from Table',
      staff_area: 'Staff Area',
      login_subtitle: 'Log in using your Admin, Kitchen, Cashier, or Waiter credentials',
      username: 'Username',
      password: 'Password',
      login: 'Log In',
      logout: 'Logout 🚪',
      demo_accounts: '🔑 Demo Accounts:',
      admin_code_required: 'Admin Security Code Required',
      admin_code_subtitle: 'Please enter Admin Security Code (Default: 1234)',
      cancel: 'Cancel',
      confirm_login: 'Confirm Login',

      live_order_status: 'Live Order Tracker',
      call_waiter: 'Call Waiter',
      request_bill: 'Request Bill',
      call_waiter_sent: 'Waiter notified! They will arrive shortly.',
      request_bill_sent: 'Bill requested! Cashier has been notified.',
      all: 'All',
      add_to_cart: 'Add to Order',
      cart_total: 'Total',
      view_cart: 'View Cart 👈',
      cart_title: 'Order Cart',
      cart_empty: 'Your cart is empty',
      order_notes: 'General Order Notes',
      order_notes_placeholder: 'General order notes (e.g. extra napkins)...',
      item_notes_placeholder: 'Item notes (e.g. no onions)...',
      final_total: 'Grand Total:',
      submit_order: 'Confirm & Send Order 🚀',
      order_success_title: 'Order submitted successfully!',

      status_NEW: 'New 🆕',
      status_ACCEPTED: 'Accepted 👍',
      status_PREPARING: 'Preparing 👨‍🍳',
      status_READY: 'Order Ready 🟢',
      status_SERVED: 'Served 🍽️',
      status_PAID: 'Paid 💳',
      status_CANCELLED: 'Cancelled ❌',
      currency: 'DZD',

      kitchen_title: 'Kitchen Live Display',
      kitchen_subtitle: 'Real-time order tracking and kitchen fulfillment',
      call_waiter_btn: 'Call Waiter to Kitchen',
      accept_order: 'Accept Order 👍',
      start_preparing: 'Start Preparing 👨‍🍳',
      order_ready: 'Order Ready 🟢',
      no_kitchen_orders: 'No active orders in kitchen right now 🎉',
      kitchen_call_sent: 'Waiter notified to come to the kitchen!',

      cashier_title: 'Cashier Station',
      cashier_subtitle: 'Manage active tables, process payments, and issue receipts',
      todays_revenue: 'Today\'s Revenue',
      todays_orders: 'Today\'s Orders',
      open_tables: 'Occupied Tables',
      pay_and_close: 'Pay & Close',
      order_ready_alert: 'ORDER READY FOR PICKUP!',
      no_cashier_orders: 'No active orders in cashier right now',
      settle_invoice: 'Settle Invoice',
      payment_method: 'Payment Method',
      amount_received: 'Amount Received',
      change_due: 'Change Due:',
      print_invoice: '🖨️ Print Invoice',
      confirm_and_close: 'Confirm & Close ✔️',
      cash: 'Cash',
      card: 'Card',
      other: 'Other',

      waiter_title: 'Waiter & Service Display',
      waiter_subtitle: 'Receive instant customer & kitchen call notifications',
      live_alerts: 'Live Active Alerts',
      no_active_alerts: 'No active alerts at the moment ✨',
      live_orders_table: 'Live Orders Feed',
      filter_all: 'All',
      filter_ready: 'Ready 🟢',
      filter_served: 'Served 🍽️',
      confirm_served: 'Confirm Meal Served 🍽️',
      kitchen_calling_waiter: '👨‍🍳 Kitchen calling waiter!',
      customer_calling_waiter: '🔔 Customer Call',
      customer_requesting_bill: '💳 Customer requested bill!',
      action_done: 'Done ✔️',

      admin_title: 'Executive Admin Dashboard',
      admin_subtitle: 'Revenue analytics, complete order log, products, tables, and staff management',
      tab_overview: '📊 Live Analytics',
      tab_orders_log: '📋 Master Order Log',
      tab_products: '🍔 Products',
      tab_categories: '📁 Categories',
      tab_tables: '🪑 Tables & QR',
      tab_users: '👥 Staff Accounts',
      tab_settings: '⚙️ Settings & Security Code',

      total_revenue: 'Total Revenue',
      today_revenue: 'Today\'s Revenue:',
      total_orders_stat: 'Total Orders',
      paid_orders_stat: 'Paid Orders:',
      table_occupancy: 'Table Occupancy Rate',
      occupied_now: 'currently occupied',
      products_categories_stat: 'Products & Categories',
      categories_active: 'active categories',
      top_best_sellers: 'Top Best Selling Dishes',
      sorted_by_qty: 'Sorted by quantity sold',
      payment_breakdown: 'Payment Method Breakdown',
      cash_sales: '💵 Cash Sales:',
      card_sales: '💳 Card Sales:',
      other_sales: '🔄 Other Sales:',

      orders_log_title: 'Complete Master Orders Log',
      search_placeholder: 'Search by Order ID or Table...',
      all_statuses: 'All Statuses',
      th_order_id: 'Order ID',
      th_table_num: 'Table #',
      th_items_qty: 'Items Qty',
      th_total: 'Total Amount',
      th_status: 'Status',
      th_payment_method: 'Payment Method',
      th_date: 'Date & Time',
      th_details: 'Details',
      view_receipt: '📄 Receipt',

      add_new_product: '➕ Add Product',
      edit_product: '✏️ Edit Product',
      add_new_category: '➕ Add Category',
      edit_category: '✏️ Edit Category',
      add_new_table: '➕ Add Table',
      add_new_staff: '➕ Add Staff Account',
      edit_staff: '✏️ Edit Staff Account',
      save_changes: 'Save Changes 💾',
      settings_title: 'Restaurant Settings & Security Code',
      admin_code_label: 'Admin Security Code',
      admin_code_hint: 'Required when logging in as admin / admin',
      role_admin: 'Admin 🟣',
      role_kitchen: 'Kitchen 🟠',
      role_cashier: 'Cashier 🔵',
      role_waiter: 'Waiter 🟢',
      delete: 'Delete',
      edit: 'Edit',
      save: 'Save',

      name_ar: 'Name in Arabic 🇸🇦',
      name_fr: 'Name in French 🇫🇷',
      name_en: 'Name in English 🇬🇧',
      desc_ar: 'Description in Arabic 🇸🇦',
      desc_fr: 'Description in French 🇫🇷',
      desc_en: 'Description in English 🇬🇧'
    }
  };

  window.getCurrentLang = function() {
    return localStorage.getItem('qr_lang') || 'ar';
  };

  window.setLang = function(lang) {
    localStorage.setItem('qr_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    window.applyTranslations();
  };

  window.t = function(key) {
    const lang = window.getCurrentLang();
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  window.getLocalizedText = function(item, field = 'name') {
    if (!item) return '';
    const lang = window.getCurrentLang(); // 'ar', 'fr', 'en'
    if (item[`${field}_${lang}`]) return item[`${field}_${lang}`];
    if (typeof item[field] === 'object' && item[field]?.[lang]) return item[field][lang];
    if (item[`${field}_ar`]) return item[`${field}_ar`];
    if (item[`${field}_fr`]) return item[`${field}_fr`];
    if (item[`${field}_en`]) return item[`${field}_en`];
    if (typeof item[field] === 'string') return item[field];
    return '';
  };

  window.applyTranslations = function() {
    const lang = window.getCurrentLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = window.t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = window.t(key);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.applyTranslations();
  });
})();
