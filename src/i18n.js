import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: 'Home',
    about: 'About',
    brands: 'Brands',
    kidsBrands: 'Kids Brands',
    contact: 'Contact',
    discover: 'Discover',
    quickLinks: 'Quick Links',
    location: 'Location',
    built_for_speed: 'Built for speed, crafted for passion, designed for legends',
    mori_luxury_location: 'MORI Luxury Brands Cars, Kabul, Afghanistan',
    email: 'Email',
    phone: 'Phone',
    phone_number: '+93-999999999',
    email_value: 'contact\\@mori-luxury.com',
    welcome_to: 'Welcome to',
    mori_luxury_car_brands: 'MORI Luxury Car Brands',
    hero_tagline: 'Performance • Elegance • Innovation',
    about_collection: 'About Our Luxury Collection',
    about_collection_text1:
      'We bring together a curated selection of the world’s most iconic luxury car brands, representing the highest level of automotive design, performance, and innovation.',
    about_collection_text2:
      'Each brand reflects speed, style, and engineering excellence that defines true luxury.',
    know_more: 'Know More',
    global_presence: 'Global Presence',
    global_presence_text1:
      'We operate across 4 continents and more than 40 countries delivering luxury driving experiences.',
    global_presence_text2: 'Built on innovation, performance, and timeless design.',
    luxury_new: 'Luxury New',
    brands_cars: 'Brands Cars',
    luxury: 'Luxury',
    brands_text1: 'Luxury performance cars from Ferrari, Bugatti, Lamborghini, Porsche, and more.',
    brands_text2: 'Powerful, elegant, and engineered for those who demand excellence.',
    kids_cars: 'Kids Cars',
    kids_text1: 'Luxury ride-on cars inspired by Mercedes, BMW, Bentley, and Lamborghini.',
    kids_text2: 'Safe, stylish, and fun for the next generation.',
    see_all: 'See All',
    design_to_drive: 'From Design to Driving Experience',
    one_brand_one_vision: 'Luxury Cars & Kids Cars — One Brand, One Vision',
    see_more: 'See More',
    ferrari: 'Ferrari',
    lamborghini: 'Lamborghini',
    porsche: 'Porsche',
    about_mori_title: 'About Mori Luxury Brands Cars',
    about_mori_subtitle: 'A world where performance meets elegance — and imagination meets luxury.',
    our_company: 'Our Company',
    our_company_text1:
      'We are a premium automotive brand dedicated to showcasing and creating the finest luxury car experience in the world. Our collection brings together iconic supercars, modern performance machines, and exclusive designs that represent power, prestige, and perfection.',
    our_company_text2:
      'At Mori Luxury Brands Cars, we believe a car is not just transportation — it is identity, emotion, and lifestyle.',
    luxury_car_collection: 'Luxury Car Collection',
    supercars: 'Supercars',
    supercars_text: 'High-performance machines built for speed, design, and dominance.',
    executive_luxury: 'Executive Luxury',
    executive_luxury_text: 'Comfort, elegance, and world-class engineering for elite lifestyles.',
    custom_editions: 'Custom Editions',
    custom_editions_text: 'Unique handcrafted designs tailored for individuality and prestige.',
    kids_luxury_collection: 'Kids Luxury Cars Collection',
    kids_luxury_text1:
      'We also bring the dream of luxury driving to the next generation. Our Kids Luxury Cars collection combines safety, style, and fun — designed for young enthusiasts who want to experience the joy of driving in a premium way.',
    kids_luxury_text2:
      'From mini electric supercars to stylish ride-on models, every detail is built with care, comfort, and excitement.',
    luxury_has_no_age: 'Luxury has no age — only passion.',
    dreams_drive_reality: 'Mori Luxury Brands Cars — where dreams drive reality.',
    brands_hero_title: 'MORI Luxury Car Brands',
    brands_hero_text: 'Explore the world’s most iconic automotive masterpieces',

    bugatti: 'Bugatti',
    mclaren: 'McLaren',
    rolls_royce: 'Rolls-Royce',
    bentley: 'Bentley',
    mercedes_benz: 'Mercedes-Benz',
    ferrari_text:
      'Ferrari is the symbol of speed, passion, and Italian luxury engineering. Known for its racing heritage and powerful V8 & V12 engines.',
    lamborghini_text:
      'Lamborghini represents bold design, aggressive styling, and extreme performance. Every car is built to stand out and dominate the road.',
    bugatti_text:
      'Bugatti is the peak of hypercar engineering — extreme speed, luxury, and rarity. One of the fastest and most expensive cars in the world.',
    mclaren_text:
      'McLaren focuses on lightweight carbon-fiber design and Formula 1 technology. Built for precision and track-level performance.',
    porsche_text:
      'Porsche blends luxury and daily usability with sports car performance. Famous for the iconic 911 series.',
    rolls_royce_text:
      'Rolls-Royce defines ultimate luxury, comfort, and prestige. A symbol of success and elite lifestyle.',
    bentley_text:
      'Bentley combines British luxury with powerful performance and handcrafted interiors.',
    mercedes_benz_text:
      'Mercedes-Benz combines German luxury with advanced performance, elegant design, and world-class comfort.',
    kids_hero_title: 'Luxury Kids Cars',
    kids_hero_sub: 'Safe • Fun • Inspired by MORI Luxury Car Brands',

    mercedes_kids_title: 'Mercedes Kids Edition',
    mercedes_kids_text:
      'Mercedes Kids cars bring premium comfort and safe driving experience for children, inspired by real Mercedes luxury design.',

    lamborghini_kids_title: 'Lamborghini Kids',
    lamborghini_kids_text:
      'Lamborghini kids cars are bold, sporty, and stylish — designed for young drivers who love luxury and speed.',

    bmw_range_kids_title: 'BMW & Range Rover Kids',
    bmw_range_kids_text:
      'BMW and Range Rover kids cars combine comfort, safety, and realistic luxury design for everyday fun.',
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch with MORI Luxury Car Brands',
    send_message: 'Send us a message',
    your_name: 'Your Name',
    message: 'Message',
    send_btn: 'Send Message',
    get_in_touch: 'Get in Touch',
    contact_description:
      'We are always ready to help you explore luxury cars and kids luxury cars. Contact us for more information, partnerships, or inquiries.',
    final_title: 'Let’s Build Your Luxury Experience',
    final_subtitle: 'Cars • Kids Cars • Lifestyle',
    explore_brands: 'Explore Brands',
    vision_title: 'From Design to Driving Experience',
    vision_subtitle: 'Luxury Cars & Kids Cars — One Brand, One Vision',
    luxury_cars: 'Luxury Cars',
    luxury_cars_text:
      'We bring together the world’s most powerful and iconic luxury cars, designed for performance, elegance, and innovation.',
    kids_cars: 'Kids Cars',
    kids_cars_text:
      'We transform luxury design into safe and fun ride-on cars for kids, bringing joy, creativity, and style together.',
    our_vision: 'Our Vision',
    our_vision_text:
      'We believe luxury is not only for adults — it is an experience that can be shared. Our mission is to connect real automotive excellence with playful innovation, creating a world where design meets emotion and driving becomes a lifestyle.',
    final_vision_title: 'One Brand. Two Worlds. Infinite Experience.',
    explore_brands: 'Explore Brands',
  },

  es: {
    home: 'Inicio',
    about: 'Acerca de',
    brands: 'Marcas',
    kidsBrands: 'Marcas infantiles',
    contact: 'Contacto',
    discover: 'Descubrir',
    quickLinks: 'Enlaces rápidos',
    location: 'Ubicación',
    built_for_speed: 'Hecho para la velocidad, la pasión y las leyendas',
    mori_luxury_location: 'MORI Luxury Brands Cars, Kabul, Afghanistan',
    phone: 'teléfono',
    email: 'Email',
    phone_number: '+93-999999999',
    email_value: 'contact\\@mori-luxury.com',
    welcome_to: 'Bienvenido a',
    mori_luxury_car_brands: 'MORI Marcas de Autos de Lujo',
    hero_tagline: 'Rendimiento • Elegancia • Innovación',
    about_collection: 'Sobre Nuestra Colección de Lujo',
    about_collection_text1:
      'Reunimos una selección exclusiva de las marcas de autos de lujo más icónicas del mundo, representando el más alto nivel de diseño automotriz, rendimiento e innovación.',
    about_collection_text2:
      'Cada marca refleja velocidad, estilo y excelencia en ingeniería que define el verdadero lujo.',
    know_more: 'Saber Más',
    global_presence: 'Presencia Global',
    global_presence_text1:
      'Operamos en 4 continentes y más de 40 países ofreciendo experiencias de conducción de lujo.',
    global_presence_text2: 'Construido sobre innovación, rendimiento y diseño atemporal.',
    luxury_new: 'Nuevas',
    brands_cars: 'Marcas de Autos',
    luxury: 'Lujo',
    brands_text1: 'Autos de alto rendimiento de Ferrari, Bugatti, Lamborghini, Porsche y más.',
    brands_text2: 'Potentes, elegantes y diseñados para quienes exigen excelencia.',
    kids_cars: 'Autos para Niños',
    kids_text1: 'Autos infantiles de lujo inspirados en Mercedes, BMW, Bentley y Lamborghini.',
    kids_text2: 'Seguros, elegantes y divertidos para la próxima generación.',
    see_all: 'Ver Todo',
    design_to_drive: 'Del Diseño a la Experiencia de Conducción',
    one_brand_one_vision: 'Autos de Lujo y Autos para Niños — Una Marca, Una Visión',
    see_more: 'Ver Más',
    ferrari: 'Ferrari',
    lamborghini: 'Lamborghini',
    porsche: 'Porsche',
    about_mori_title: 'Acerca de Mori Luxury Brands Cars',
    about_mori_subtitle:
      'Un mundo donde el rendimiento se une con la elegancia y la imaginación con el lujo.',
    our_company: 'Nuestra Empresa',
    our_company_text1:
      'Somos una marca automotriz premium dedicada a mostrar y crear la mejor experiencia de autos de lujo del mundo. Nuestra colección reúne superdeportivos icónicos, máquinas modernas de alto rendimiento y diseños exclusivos que representan poder, prestigio y perfección.',
    our_company_text2:
      'En Mori Luxury Brands Cars, creemos que un automóvil no es solo transporte — es identidad, emoción y estilo de vida.',
    luxury_car_collection: 'Colección de Autos de Lujo',
    supercars: 'Superdeportivos',
    supercars_text: 'Máquinas de alto rendimiento creadas para velocidad, diseño y dominio.',
    executive_luxury: 'Lujo Ejecutivo',
    executive_luxury_text:
      'Comodidad, elegancia e ingeniería de clase mundial para estilos de vida exclusivos.',
    custom_editions: 'Ediciones Personalizadas',
    custom_editions_text: 'Diseños únicos hechos a mano para individualidad y prestigio.',
    kids_luxury_collection: 'Colección de Autos de Lujo para Niños',
    kids_luxury_text1:
      'También llevamos el sueño de conducir lujo a la próxima generación. Nuestra colección combina seguridad, estilo y diversión.',
    kids_luxury_text2:
      'Desde mini superautos eléctricos hasta modelos montables elegantes, cada detalle está hecho con cuidado y emoción.',
    luxury_has_no_age: 'El lujo no tiene edad — solo pasión.',
    dreams_drive_reality: 'Mori Luxury Brands Cars — donde los sueños conducen la realidad.',
    brands_hero_title: 'MORI Marcas de Autos de Lujo',
    brands_hero_text: 'Explora las obras maestras automotrices más icónicas del mundo',

    bugatti: 'Bugatti',
    mclaren: 'McLaren',
    rolls_royce: 'Rolls-Royce',
    bentley: 'Bentley',
    mercedes_benz: 'Mercedes-Benz',

    ferrari_text:
      'Ferrari es el símbolo de velocidad, pasión e ingeniería italiana de lujo. Conocido por su herencia de carreras y motores V8 y V12.',
    lamborghini_text:
      'Lamborghini representa diseño audaz, estilo agresivo y rendimiento extremo. Cada auto está hecho para destacar y dominar la carretera.',
    bugatti_text:
      'Bugatti es la cima de la ingeniería hiperdeportiva: velocidad extrema, lujo y rareza. Uno de los autos más rápidos y caros del mundo.',
    mclaren_text:
      'McLaren se enfoca en diseño liviano de fibra de carbono y tecnología de Fórmula 1. Construido para precisión y rendimiento de pista.',
    porsche_text:
      'Porsche combina lujo y uso diario con rendimiento deportivo. Famoso por la icónica serie 911.',
    rolls_royce_text:
      'Rolls-Royce define el lujo supremo, confort y prestigio. Símbolo de éxito y estilo de vida exclusivo.',
    bentley_text: 'Bentley combina lujo británico con gran rendimiento e interiores artesanales.',
    mercedes_benz_text:
      'Mercedes-Benz combina lujo alemán con rendimiento avanzado, diseño elegante y comodidad de clase mundial.',
    kids_hero_title: 'Autos de Lujo para Niños',
    kids_hero_sub: 'Seguro • Divertido • Inspirado en MORI Luxury Car Brands',

    mercedes_kids_title: 'Edición Infantil Mercedes',
    mercedes_kids_text:
      'Los autos infantiles Mercedes ofrecen comodidad premium y una experiencia segura para niños, inspirados en el verdadero diseño de lujo Mercedes.',

    lamborghini_kids_title: 'Lamborghini Infantil',
    lamborghini_kids_text:
      'Los autos infantiles Lamborghini son audaces, deportivos y elegantes, diseñados para jóvenes conductores que aman el lujo y la velocidad.',

    bmw_range_kids_title: 'BMW y Range Rover Infantil',
    bmw_range_kids_text:
      'Los autos infantiles BMW y Range Rover combinan comodidad, seguridad y diseño de lujo realista para la diversión diaria.',
    kids_hero_title: 'Autos de Lujo para Niños',
    kids_hero_sub: 'Seguro • Divertido • Inspirado en MORI Luxury Car Brands',

    mercedes_kids_title: 'Edición Infantil Mercedes',
    mercedes_kids_text:
      'Los autos infantiles Mercedes ofrecen comodidad premium y una experiencia segura para niños, inspirados en el verdadero diseño de lujo Mercedes.',

    lamborghini_kids_title: 'Lamborghini Infantil',
    lamborghini_kids_text:
      'Los autos infantiles Lamborghini son audaces, deportivos y elegantes, diseñados para jóvenes conductores que aman el lujo y la velocidad.',

    bmw_range_kids_title: 'BMW y Range Rover Infantil',
    bmw_range_kids_text:
      'Los autos infantiles BMW y Range Rover combinan comodidad, seguridad y diseño de lujo realista para la diversión diaria.',
    contact_title: 'Contáctanos',
    contact_subtitle: 'Ponte en contacto con MORI Luxury Car Brands',
    send_message: 'Envíanos un mensaje',
    your_name: 'Tu nombre',
    message: 'Mensaje',
    send_btn: 'Enviar mensaje',
    get_in_touch: 'Ponerse en contacto',
    contact_description:
      'Siempre estamos listos para ayudarte a explorar autos de lujo y autos infantiles de lujo.',
    final_title: 'Construyamos tu experiencia de lujo',
    final_subtitle: 'Autos • Autos infantiles • Estilo de vida',
    explore_brands: 'Explorar marcas',
    vision_title: 'Del Diseño a la Experiencia de Conducción',
    vision_subtitle: 'Autos de lujo y autos infantiles — Una marca, una visión',
    luxury_cars: 'Autos de lujo',
    luxury_cars_text:
      'Reunimos los autos de lujo más poderosos e icónicos del mundo, diseñados para rendimiento, elegancia e innovación.',
    kids_cars: 'Autos infantiles',
    kids_cars_text: 'Transformamos el diseño de lujo en autos seguros y divertidos para niños.',
    our_vision: 'Nuestra visión',
    our_vision_text: 'Creemos que el lujo no es solo para adultos — es una experiencia compartida.',
    final_vision_title: 'Una marca. Dos mundos. Experiencia infinita.',
    explore_brands: 'Explorar marcas',
  },

  da: {
    home: 'خانه',
    about: 'درباره ما',
    brands: 'برندها',
    kidsBrands: 'ماشین‌های کودک',
    contact: 'تماس',
    discover: 'کشف',
    quickLinks: 'لینک‌های سریع',
    location: 'موقعیت',
    built_for_speed: 'ساخته شده برای سرعت، اشتیاق و افسانه‌ها',
    mori_luxury_location: 'موتر های لاکچری موری، کابل، افغانستان',
    phone: 'تیلفون',
    email: 'ایمیل',
    phone_number: '+۹۳-۹۹۹۹۹۹۹۹۹',
    email_value: 'contact\\@mori-luxury.com',
    welcome_to: 'خوش آمدید به',
    mori_luxury_car_brands: ' برندهای موتر لوکس موری',
    hero_tagline: 'قدرت • ظرافت • نوآوری',
    about_collection: 'درباره مجموعه لوکس ما',
    about_collection_text1:
      'ما مجموعه‌ای ویژه از مشهورترین برندهای موتر لوکس جهان را گردهم آورده‌ایم که بالاترین سطح طراحی، عملکرد و نوآوری را نشان می‌دهد.',
    about_collection_text2:
      'هر برند بازتابی از سرعت، سبک و مهندسی عالی است که لوکس واقعی را تعریف می‌کند.',
    know_more: 'بیشتر بدانید',
    global_presence: 'حضور جهانی',
    global_presence_text1:
      'ما در ۴ قاره و بیش از ۴۰ کشور فعالیت داریم و تجربه رانندگی لوکس ارائه می‌کنیم.',
    global_presence_text2: 'ساخته شده بر پایه نوآوری، عملکرد و طراحی جاودانه.',
    luxury_new: 'جدیدترین ',
    brands_cars: 'برندهای موتر',
    luxury: 'لوکس',
    brands_text1: 'موترهای قدرتمند از فراری، بوگاتی، لامبورگینی، پورشه و بیشتر.',
    brands_text2: 'قدرتمند، زیبا و ساخته شده برای کسانی که بهترین را می‌خواهند.',
    kids_cars: 'موترهای کودک ',
    kids_text1: 'موترهای کودک لوکس الهام گرفته از مرسدس، بی‌ام‌و، بنتلی و لامبورگینی.',
    kids_text2: 'امن، زیبا و سرگرم‌کننده برای نسل آینده.',
    see_all: 'دیدن همه',
    design_to_drive: 'از طراحی تا تجربه رانندگی',
    one_brand_one_vision: 'موترهای لوکس و موترهای کودک — یک برند، یک دیدگاه',
    see_more: 'بیشتر ببینید',
    ferrari: 'فراری',
    lamborghini: 'لامبورگینی',
    porsche: 'پور شه',
    about_mori_title: 'درباره موترهای برند لوکس موری',
    about_mori_subtitle: 'جهانی که در آن عملکرد با ظرافت و خیال با لوکس بودن یکجا می‌شود.',
    our_company: 'شرکت ما',
    our_company_text1:
      'ما یک برند ممتاز موتر هستیم که برای نمایش و ایجاد بهترین تجربه موترهای لوکس در جهان فعالیت می‌کنیم. مجموعه ما شامل سوپرموترهای مشهور، ماشین‌های مدرن قدرتمند و طرح‌های ویژه است که نشان‌دهنده قدرت، اعتبار و کمال می‌باشند.',
    our_company_text2:
      'در موری برندهای لوکس موتر، باور داریم که موتر فقط وسیله رفت‌وآمد نیست — بلکه هویت، احساس و سبک زندگی است.',
    luxury_car_collection: 'مجموعه موترهای لوکس',
    supercars: 'سوپرموترها',
    supercars_text: 'ماشین‌های قدرتمند ساخته شده برای سرعت، طراحی و برتری.',
    executive_luxury: 'لوکس اجرایی',
    executive_luxury_text: 'راحتی، ظرافت و مهندسی جهانی برای سبک زندگی ممتاز.',
    custom_editions: 'نسخه‌های سفارشی',
    custom_editions_text: 'طرح‌های دست‌ساز ویژه برای شخصیت فردی و اعتبار.',
    kids_luxury_collection: 'مجموعه موترهای لوکس کودک',
    kids_luxury_text1:
      'ما رویای رانندگی لوکس را برای نسل آینده نیز فراهم کرده‌ایم. مجموعه موترهای کودک ما امنیت، زیبایی و سرگرمی را یکجا می‌سازد.',
    kids_luxury_text2:
      'از سوپرموترهای برقی کوچک تا مدل‌های شیک سواری، هر جزئیات با دقت و هیجان ساخته شده است.',
    luxury_has_no_age: 'لوکس بودن سن ندارد — فقط اشتیاق دارد.',
    dreams_drive_reality: 'موری برندهای لوکس موتر — جایی که رویاها واقعیت را می‌رانند.',
    brands_hero_title: 'برندهای موتر لوکس موری',
    brands_hero_text: 'مشهورترین شاهکارهای موتر جهان را کشف کنید',

    bugatti: 'بوگاتی',
    mclaren: 'مکلارن',
    rolls_royce: 'رولزرویس',
    bentley: 'بنتلی',
    mercedes_benz: 'مرسدس بنز',

    ferrari_text:
      'فراری نماد سرعت، اشتیاق و مهندسی لوکس ایتالیا است. مشهور به سابقه مسابقات و موتورهای قدرتمند V8 و V12.',
    lamborghini_text:
      'لامبورگینی نمایانگر طراحی جسورانه، ظاهر تهاجمی و عملکرد فوق‌العاده است. هر موتر برای درخشش ساخته شده است.',
    bugatti_text:
      'بوگاتی اوج مهندسی هایپرکار است — سرعت بی‌نهایت، لوکس و کمیاب. یکی از سریع‌ترین و گران‌ترین موترهای جهان.',
    mclaren_text:
      'مکلارن بر طراحی سبک فیبرکربن و تکنولوژی فرمول 1 تمرکز دارد. ساخته شده برای دقت و عملکرد پیست.',
    porsche_text:
      'پورشه لوکس و استفاده روزمره را با عملکرد اسپرت ترکیب می‌کند. مشهور به سری معروف 911.',
    rolls_royce_text: 'رولزرویس تعریف نهایی لوکس، راحتی و اعتبار است. نماد موفقیت و زندگی اشرافی.',
    bentley_text: 'بنتلی لوکس بریتانیایی را با قدرت بالا و فضای داخلی دست‌ساز ترکیب می‌کند.',
    mercedes_benz_text:
      'مرسدس بنز لوکس آلمانی را با عملکرد پیشرفته، طراحی زیبا و راحتی جهانی ترکیب می‌کند.',
    brands_hero_title: 'برندهای موتر لوکس موری',
    brands_hero_text: 'مشهورترین شاهکارهای موتر جهان را کشف کنید',

    bugatti: 'بوگاتی',
    mclaren: 'مکلارن',
    rolls_royce: 'رولزرویس',
    bentley: 'بنتلی',
    mercedes_benz: 'مرسدس بنز',

    ferrari_text:
      'فراری نماد سرعت، اشتیاق و مهندسی لوکس ایتالیا است. مشهور به سابقه مسابقات و موتورهای قدرتمند V8 و V12.',
    lamborghini_text:
      'لامبورگینی نمایانگر طراحی جسورانه، ظاهر تهاجمی و عملکرد فوق‌العاده است. هر موتر برای درخشش ساخته شده است.',
    bugatti_text:
      'بوگاتی اوج مهندسی هایپرکار است — سرعت بی‌نهایت، لوکس و کمیاب. یکی از سریع‌ترین و گران‌ترین موترهای جهان.',
    mclaren_text:
      'مکلارن بر طراحی سبک فیبرکربن و تکنولوژی فرمول 1 تمرکز دارد. ساخته شده برای دقت و عملکرد پیست.',
    porsche_text:
      'پورشه لوکس و استفاده روزمره را با عملکرد اسپرت ترکیب می‌کند. مشهور به سری معروف 911.',
    rolls_royce_text: 'رولزرویس تعریف نهایی لوکس، راحتی و اعتبار است. نماد موفقیت و زندگی اشرافی.',
    bentley_text: 'بنتلی لوکس بریتانیایی را با قدرت بالا و فضای داخلی دست‌ساز ترکیب می‌کند.',
    mercedes_benz_text:
      'مرسدس بنز لوکس آلمانی را با عملکرد پیشرفته، طراحی زیبا و راحتی جهانی ترکیب می‌کند.',
    kids_hero_title: 'موترهای لوکس کودک',
    kids_hero_sub: 'امن • سرگرم‌کننده • الهام گرفته از برندهای لوکس موری',

    mercedes_kids_title: 'نسخه کودک مرسدس',
    mercedes_kids_text:
      'موترهای کودک مرسدس راحتی عالی و تجربه رانندگی امن برای کودکان فراهم می‌کنند و از طراحی واقعی مرسدس الهام گرفته شده‌اند.',

    lamborghini_kids_title: 'لامبورگینی کودک',
    lamborghini_kids_text:
      'موترهای کودک لامبورگینی جسور، اسپرت و شیک هستند — ساخته شده برای رانندگان جوانی که عاشق لوکس و سرعت اند.',

    bmw_range_kids_title: 'بی‌ام‌و و رنج روور کودک',
    bmw_range_kids_text:
      'موترهای کودک بی‌ام‌و و رنج روور راحتی، امنیت و طراحی واقعی لوکس را برای سرگرمی روزانه ترکیب می‌کنند.',
    contact_title: 'تماس با ما',
    contact_subtitle: 'با برند های لوکس موتر موری در ارتباط شوید',
    send_message: 'ارسال پیام',
    your_name: 'نام شما',
    message: 'پیام',
    send_btn: 'ارسال پیام',
    get_in_touch: 'تماس بگیرید',
    contact_description:
      'ما همیشه آماده هستیم تا شما را در شناخت موترهای لوکس و موترهای کودک کمک کنیم.',
    final_title: 'تجربه لوکس خود را بسازیم',
    final_subtitle: 'موترها • موترهای کودک • سبک زندگی',
    explore_brands: 'دیدن برندها',
    vision_title: 'از طراحی تا تجربه رانندگی',
    vision_subtitle: 'موترهای لوکس و موترهای کودک — یک برند، یک دیدگاه',
    luxury_cars: 'موترهای لوکس',
    luxury_cars_text: 'ما بهترین و قدرتمندترین موترهای لوکس جهان را گردهم آورده‌ایم.',
    kids_cars: 'موترهای کودک',
    kids_cars_text: 'ما طراحی لوکس را به موترهای امن و سرگرم‌کننده برای کودکان تبدیل می‌کنیم.',
    our_vision: 'دیدگاه ما',
    our_vision_text: 'لوکس فقط برای بزرگسالان نیست — یک تجربه مشترک است.',
    final_vision_title: 'یک برند. دو جهان. تجربه بی‌نهایت.',
    explore_brands: 'دیدن برندها',
  },
}

const savedLang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages,
})


export default i18n