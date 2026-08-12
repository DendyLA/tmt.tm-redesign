import type { Locale } from "./config";

export const dictionaries = {
    ru: {
        menu: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            tourism: "Туризм",
            blog: "Блог",
            news: "Новости",
            vacancy: "Вакансии",
            contacts: "Контакты",
        },
        common: {
            openMenu: "Открыть меню",
            closeMenu: "Закрыть",
            readMore: "Подробнее...",
            allNews: "Все новости",
            page: "Страница",
            backToNews: "Вернуться к Новостям",
            backToBlog: "Вернуться в Блог",
            noTitle: "Нет заголовка",
            noText: "Нет текста",
            vacancy: "Вакансия",
            tender: "Тендер",
            apply: "Оставить заявку",
            slogan: "Вдохновляй · Объединяй · Развивай",
            advertisingAlt: "Реклама TMT Consulting Group",
            projectPhotoAlt: "Фото проекта",
        },
        notFound: {
            title: "Страница не найдена",
            description: "Запрошенная страница TMT Consulting Group не найдена.",
            message: "Мы не смогли найти эту страницу.",
        },
        seo: {
            newsKeyword: "новости TMT Consulting Group",
            blogLabel: "Блог",
            blogKeywords: [
                "блог TMT Consulting Group",
                "консалтинг в Туркменистане",
                "сопровождение бизнеса в Ашхабаде",
            ],
            projectsLabel: "Проекты",
            projectKeywords: [
                "проекты TMT Consulting Group",
                "реализованные проекты в Туркменистане",
            ],
            vacancyKeywords: [
                "вакансии TMT Consulting Group",
                "вакансии в Туркменистане",
                "вакансии в Ашхабаде",
            ],
            tenderKeywords: [
                "тендеры TMT Consulting Group",
                "тендеры в Туркменистане",
                "тендеры в Ашхабаде",
                "деловые возможности Туркменистан",
            ],
        },
        sections: {
            news: {
                title: "НОВОСТИ ТУРКМЕНИСТАНА",
                subtitle:
                    "Новости Туркменистана, бизнес-события, форумы в Ашхабаде, инвестиции и актуальные обновления от TMT Consulting Group.",
                latest: "Последние Новости",
            },
            blog: {
                title: "БЛОГ",
                subtitle:
                    "Материалы о бизнесе, консалтинге и событиях в Туркменистане.",
                detailSubtitle:
                    "Делимся опытом, идеями и актуальными новостями.",
            },
            about: {
                title: "О НАС",
                subtitle: "Мост между капиталом и возможностью",
                projectsTitle: "НАШИ ПРОЕКТЫ",
                projectsSubtitle:
                    "Реализованные проекты, которыми мы гордимся.",
            },
            services: {
                title: "УСЛУГИ ДИЗАЙНА И IT",
                subtitle:
                    "От брендинга до запуска веб-платформ: разрабатываем дизайн, создаём сайты и цифровые продукты, которые привлекают клиентов и усиливают ваш бизнес.",
            },
            tourism: {
                title: "ТУРИЗМ В ТУРКМЕНИСТАНЕ",
                subtitle:
                    "Путешествия в Туркменистан, туры, маршруты и профессиональное туристическое сопровождение от TMT Travel.",
                toursTitle: "НАШИ ТУРЫ:",
            },
            vacancy: {
                title: "ВАКАНСИИ и тендеры",
                subtitle:
                    "Открытые вакансии, тендеры и новые возможности для развития.",
            },
            contacts: {
                title: "КОНТАКТЫ",
                subtitle:
                    "Будем рады сотрудничеству и новым партнёрствам.",
            },
        },
        home: {
            ticker: [
                "Инвестиционный консалтинг",
                "Деловые форумы",
                "УСЛУГИ ДИЗАЙНА",
                "Поддержка стартапов",
                "IFT 2026 — 18 марта",
                "ВОЗМОЖНОСТИ",
                "УСЛУГИ IT",
                "НОВОСТИ",
            ],
            promo: {
                location: "Туркменистан · Центральная Азия · Глобальный охват",
                subtitle: "Ваш партнер в Туркменистане",
                cta: "Начать сотрудничество",
                video: "Смотреть IFT 2026",
            },
            about: {
                label: "О НАС",
                darkText: "Мост между",
                primaryText: "капиталом и возможностью",
                text:
                    "— консалтинговая компания, специализирующаяся на сопровождении иностранных инвестиций, развитии международного сотрудничества и организации деловых мероприятий в Центральной Азии. Мы предоставляем комплексную поддержку инвестиционных и бизнес-проектов, помогая компаниям эффективно выходить на рынки региона и выстраивать долгосрочные партнерства.",
                advantages: [
                    "Прямой доступ к государственным структурам Туркменистана",
                    "Собственная база из 500+ инвесторов и партнёров",
                    "Организаторы флагманского форума IFT",
                    "Полный цикл сопровождения — от идеи до сделки",
                    "Работа на трёх языках: русский, английский, туркменский",
                ],
            },
            services: {
                label: "Наши услуги",
                darkText: "Что мы ",
                primaryText: "делаем",
                text:
                    "Соединяем идеи, инвестиции и технологии, чтобы ваш бизнес уверенно рост и масштабировался в Центральной Азии.",
                cta: "Подробнее",
            },
            projects: {
                label: "Наши ПРОЕКТЫ",
                darkText: "Ключевые",
                primaryText: "проекты",
            },
            news: {
                label: "НОВОСТИ",
                darkText: "Что",
                primaryText: "Нового",
                cta: "Все новости",
            },
            contact: {
                label: "Начните сегодня",
                darkText: "Готовы",
                primaryText: "войти в рынок?",
                text:
                    "Получите персональную консультацию от команды TMT и узнайте, как мы поможем вашему бизнесу в Центральной Азии",
                cta: "Оставить заявку",
                direct: "Или напишите напрямую:",
            },
            partners: "Наши партнёры и МЕДИА ПАРТНЕРЫ",
        },
        about: {
            text:
                "TMT Consulting Group — динамичная консалтинговая компания с глубокой экспертизой в привлечении иностранных инвестиций и организации деловых мероприятий международного уровня в Центральной Азии. Мы предлагаем всестороннюю поддержку бизнес-проектов и обеспечиваем выход на внутренние и региональные рынки.",
            advantages: [
                "Прямой доступ к государственным структурам Туркменистана",
                "Собственная база из 500+ инвесторов и партнёров",
                "Организаторы флагманского форума IFT",
                "Полный цикл сопровождения — от идеи до сделки",
                "Работа на трёх языках: русский, английский, туркменский",
            ],
        },
        tourism: {
            heading: "ТУРЫ ПО ТУРКМЕНИСТАНУ:",
            text:
                "TMT Travel — это надежный и профессиональный партнер в сфере путешествий с высококвалифицированной командой, стремящейся к совершенству. Мы специализируемся на создании безупречных, хорошо организованных и незабываемых путешествий.\n\nБлагодаря сильной страсти к гостеприимству и вниманию к каждой детали, мы гарантируем, что каждое путешествие будет уникальным, вдохновляющим и по-настоящему запоминающимся для наших гостей.",
            points: [
                "Авиабилеты и проживание",
                "Гастрономические приключения",
                "Местные туры и гиды",
                "Индивидуальные путешествия",
                "Туристическая фотосъемка",
            ],
            imageAlt: [
                "Дарваза в Туркменистане",
                "Исторический мавзолей в Туркменистане",
                "Кутлуг-Тимур в Туркменистане",
            ],
        },
        contacts: {
            formTitle: "Отправьте нам сообщение",
            formSubtitle: "Заполните форму, и мы свяжемся с вами в ближайшее время",
            name: "Имя",
            namePlaceholder: "Введите ваше имя",
            company: "Компания",
            companyPlaceholder: "Введите имя компании",
            email: "Электронная почта",
            phone: "Номер телефона",
            message: "Сообщение",
            messagePlaceholder: "Расскажите, чем мы можем вам помочь...",
            submit: "Отправить сообщение",
            bannerTitle: "Заинтересованы в сотрудничестве?",
            bannerText:
                "Давайте обсудим, как мы можем помочь вашему бизнесу развиваться и расти.",
            bannerCta: "Подробнее о наших услугах",
            infoTitle: "Наши Контакты",
            workingHours: "Рабочие часы",
            weekdays: "Понедельник - Пятница",
            weekend: "Суббота - Воскресенье",
            closed: "Выходной",
        },
        vacancy: {
            vacancies: "Вакансии",
            tenders: "Тендеры",
            allCategories: "Все категории",
            allRegions: "Все регионы",
            categories: "Категории:",
            regions: "Регионы:",
            noVacancies: "На данный момент нет вакансий.",
            noTenders: "На данный момент нет тендеров.",
            description: "описание",
            requirements: "Требования",
            regionsList: ["Ашхабад", "Ахал", "Мары", "Лебап", "Дашогуз", "Балкан"],
        },
        footer: {
            description:
                "Ведущая консалтинговая группа в Центральной Азии. Инвестиции. Форумы. Партнёрства. B2G.",
            contacts: "Контакты",
            rights: "Все права защищены",
        },
    },
    en: {
        menu: {
            home: "Home",
            about: "About Us",
            services: "Services",
            tourism: "Tourism",
            blog: "Blog",
            news: "News",
            vacancy: "Vacancies",
            contacts: "Contacts",
        },
        common: {
            openMenu: "Open menu",
            closeMenu: "Close",
            readMore: "Read more...",
            allNews: "All news",
            page: "Page",
            backToNews: "Back to News",
            backToBlog: "Back to Blog",
            noTitle: "No title",
            noText: "No text",
            vacancy: "Vacancy",
            tender: "Tender",
            apply: "Apply",
            slogan: "Inspire · Unite · Grow",
            advertisingAlt: "TMT Consulting Group advertisement",
            projectPhotoAlt: "Project photo",
        },
        notFound: {
            title: "Page not found",
            description: "The requested TMT Consulting Group page was not found.",
            message: "We could not find this page.",
        },
        seo: {
            newsKeyword: "TMT Consulting Group news",
            blogLabel: "Blog",
            blogKeywords: [
                "TMT Consulting Group blog",
                "consulting in Turkmenistan",
                "business support in Ashgabat",
            ],
            projectsLabel: "Projects",
            projectKeywords: [
                "TMT Consulting Group projects",
                "completed projects in Turkmenistan",
            ],
            vacancyKeywords: [
                "TMT Consulting Group vacancies",
                "vacancies in Turkmenistan",
                "vacancies in Ashgabat",
            ],
            tenderKeywords: [
                "TMT Consulting Group tenders",
                "tenders in Turkmenistan",
                "tenders in Ashgabat",
                "business opportunities in Turkmenistan",
            ],
        },
        sections: {
            news: {
                title: "TURKMENISTAN NEWS",
                subtitle:
                    "News in Turkmenistan, business updates, events in Ashgabat, forums, investments and consulting insights from TMT Consulting Group.",
                latest: "Latest News",
            },
            blog: {
                title: "BLOG",
                subtitle:
                    "Insights on business, consulting and events in Turkmenistan.",
                detailSubtitle:
                    "We share experience, ideas and current updates.",
            },
            about: {
                title: "ABOUT US",
                subtitle: "The Bridge Between Capital and Opportunity",
                projectsTitle: "OUR PROJECTS",
                projectsSubtitle: "Selected projects we are proud of.",
            },
            services: {
                title: "DESIGN AND IT SERVICES",
                subtitle:
                    "From branding to web platforms: we design, build websites and create digital products that attract clients and strengthen your business.",
            },
            tourism: {
                title: "TRAVEL TO TURKMENISTAN",
                subtitle:
                    "Travel to Turkmenistan with TMT Travel, a tourism agency in Turkmenistan organizing tours, routes and professional travel support.",
                toursTitle: "OUR TOURS:",
            },
            vacancy: {
                title: "VACANCIES and tenders",
                subtitle:
                    "Open vacancies, tenders and new opportunities for growth.",
            },
            contacts: {
                title: "CONTACTS",
                subtitle:
                    "We welcome cooperation and new partnerships.",
            },
        },
        home: {
            ticker: [
                "Investment consulting",
                "Business forums",
                "DESIGN SERVICES",
                "Startup support",
                "IFT 2026 — March 18",
                "OPPORTUNITIES",
                "IT SERVICES",
                "NEWS",
            ],
            promo: {
                location: "Turkmenistan · Central Asia · Global reach",
                subtitle: "Your Partner in Turkmenistan",
                cta: "Partner with us",
                video: "Watch IFT 2026",
            },
            about: {
                label: "ABOUT US",
                darkText: "A bridge between",
                primaryText: "capital and opportunity",
                text:
                    "is a consulting company specializing in foreign investment support, international cooperation development and business event management in Central Asia. We provide end-to-end support for investment and business projects, helping companies enter regional markets efficiently and build long-term partnerships.",
                advantages: [
                    "Direct access to government agencies in Turkmenistan",
                    "Own network of 500+ investors and partners",
                    "Organizer of the flagship IFT forum",
                    "Full-cycle support from idea to deal",
                    "Work in three languages: Russian, English and Turkmen",
                ],
            },
            services: {
                label: "Our services",
                darkText: "What we ",
                primaryText: "do",
                text:
                    "We connect ideas, investment and technology so your business can grow confidently across Central Asia.",
                cta: "Learn more",
            },
            projects: {
                label: "OUR PROJECTS",
                darkText: "Key",
                primaryText: "projects",
            },
            news: {
                label: "NEWS",
                darkText: "What's",
                primaryText: "New",
                cta: "All news",
            },
            contact: {
                label: "Start today",
                darkText: "Ready",
                primaryText: "to enter the market?",
                text:
                    "Get a personal consultation from the TMT team and learn how we can help your business in Central Asia",
                cta: "Send request",
                direct: "Or write directly:",
            },
            partners: "Our partners and MEDIA PARTNERS",
        },
        about: {
            text:
                "TMT Consulting Group is a dynamic consulting company with deep expertise in attracting foreign investment and organizing international-level business events in Central Asia. We provide comprehensive support for business projects and enable access to local and regional markets.",
            advantages: [
                "Direct access to government institutions in Turkmenistan",
                "Own network of 500+ investors and partners",
                "Organizer of the flagship IFT forum",
                "Full-cycle support from idea to deal",
                "Work in three languages: Russian, English and Turkmen",
            ],
        },
        tourism: {
            heading: "TOURS AROUND TURKMENISTAN:",
            text:
                "TMT Travel is a reliable and professional partner in travel, with a highly qualified team committed to excellence. We specialize in creating seamless, well-organized and memorable trips.\n\nWith a strong passion for hospitality and attention to every detail, we make every journey unique, inspiring and truly memorable for our guests.",
            points: [
                "Flights and accommodation",
                "Gastronomic experiences",
                "Local tours and guides",
                "Tailor-made travel",
                "Travel photography",
            ],
            imageAlt: [
                "Darvaza in Turkmenistan",
                "Historical mausoleum in Turkmenistan",
                "Kutlug-Timur in Turkmenistan",
            ],
        },
        contacts: {
            formTitle: "Send us a message",
            formSubtitle: "Fill out the form and we will contact you shortly",
            name: "Name",
            namePlaceholder: "Enter your name",
            company: "Company",
            companyPlaceholder: "Enter company name",
            email: "Email",
            phone: "Phone number",
            message: "Message",
            messagePlaceholder: "Tell us how we can help you...",
            submit: "Send message",
            bannerTitle: "Interested in cooperation?",
            bannerText:
                "Let us discuss how we can help your business develop and grow.",
            bannerCta: "More about our services",
            infoTitle: "Our Contacts",
            workingHours: "Working hours",
            weekdays: "Monday - Friday",
            weekend: "Saturday - Sunday",
            closed: "Closed",
        },
        vacancy: {
            vacancies: "Vacancies",
            tenders: "Tenders",
            allCategories: "All categories",
            allRegions: "All regions",
            categories: "Categories:",
            regions: "Regions:",
            noVacancies: "There are no vacancies at the moment.",
            noTenders: "There are no tenders at the moment.",
            description: "description",
            requirements: "Requirements",
            regionsList: ["Ashgabat", "Ahal", "Mary", "Lebap", "Dashoguz", "Balkan"],
        },
        footer: {
            description:
                "A leading consulting group in Central Asia. Investments. Forums. Partnerships. B2G.",
            contacts: "Contacts",
            rights: "All rights reserved",
        },
    },
    tm: {
        menu: {
            home: "Baş sahypa",
            about: "Biz barada",
            services: "Hyzmatlar",
            tourism: "Syýahatçylyk",
            blog: "Blog",
            news: "Täzelikler",
            vacancy: "Iş orunlary",
            contacts: "Habarlaşmak",
        },
        common: {
            openMenu: "Menýuny aç",
            closeMenu: "Ýap",
            readMore: "Giňişleýin...",
            allNews: "Ähli täzelikler",
            page: "Sahypa",
            backToNews: "Täzeliklere dolan",
            backToBlog: "Bloga dolan",
            noTitle: "Sözbaşy ýok",
            noText: "Tekst ýok",
            vacancy: "Iş orny",
            tender: "Tender",
            apply: "Arza ibermek",
            slogan: "Ylham ber · Birleşdir · Ösdür",
            advertisingAlt: "TMT Consulting Group reklamasy",
            projectPhotoAlt: "Taslamanyň suraty",
        },
        notFound: {
            title: "Sahypa tapylmady",
            description: "Soralan TMT Consulting Group sahypasy tapylmady.",
            message: "Bu sahypany tapyp bilmedik.",
        },
        seo: {
            newsKeyword: "TMT Consulting Group täzelikleri",
            blogLabel: "Blog",
            blogKeywords: [
                "TMT Consulting Group blog",
                "Türkmenistanda konsalting",
                "Aşgabatda biznes goldawy",
            ],
            projectsLabel: "Taslamalar",
            projectKeywords: [
                "TMT Consulting Group taslamalary",
                "Türkmenistanda amala aşyrylan taslamalar",
            ],
            vacancyKeywords: [
                "TMT Consulting Group iş orunlary",
                "Türkmenistanda iş orunlary",
                "Aşgabatda iş orunlary",
            ],
            tenderKeywords: [
                "TMT Consulting Group tenderleri",
                "Türkmenistanda tenderler",
                "Aşgabatda tenderler",
                "Türkmenistanda biznes mümkinçilikleri",
            ],
        },
        sections: {
            news: {
                title: "TÜRKMENISTAN TÄZELIKLERI",
                subtitle:
                    "Türkmenistan täzelikleri, Aşgabatdaky işewürlik wakalary, forumlar, maýa goýumlar we TMT Consulting Group täzelikleri.",
                latest: "Soňky täzelikler",
            },
            blog: {
                title: "BLOG",
                subtitle:
                    "Türkmenistanda biznes, konsalting we çäreler barada materiallar.",
                detailSubtitle:
                    "Tejribe, pikirler we möhüm täzelikler bilen paýlaşýarys.",
            },
            about: {
                title: "BIZ BARADA",
                subtitle: "Maýa bilen mümkinçilikleriň arasyndaky köpri",
                projectsTitle: "TASLAMALARYMYZ",
                projectsSubtitle: "Buýsanýan amala aşyran taslamalarymyz.",
            },
            services: {
                title: "DIZAÝN WE IT HYZMATLARY",
                subtitle:
                    "Brendingden web-platforma çenli: müşderileri çekýän we biznesiňizi güýçlendirýän dizaýn, saýt we sanly önümleri döredýäris.",
            },
            tourism: {
                title: "TÜRKMENISTANA SYÝAHAT",
                subtitle:
                    "TMT Travel bilen Türkmenistana syýahat, Türkmenistanda syýahatçylyk agentligi, ugurlar we professional syýahat goldawy.",
                toursTitle: "SYÝAHATLARYMYZ:",
            },
            vacancy: {
                title: "IŞ ORUNLARY we tenderler",
                subtitle:
                    "Açyk iş orunlary, tenderler we ösüş üçin täze mümkinçilikler.",
            },
            contacts: {
                title: "HABARLAŞMAK",
                subtitle:
                    "Hyzmatdaşlyga we täze hyzmatdaşlyklara şat bolarys.",
            },
        },
        home: {
            ticker: [
                "Maýa goýum konsaltingi",
                "Işewürlik forumlary",
                "DIZAÝN HYZMATLARY",
                "Startap goldawy",
                "IFT 2026 — 18 mart",
                "MÜMKINÇILIKLER",
                "IT HYZMATLARY",
                "TÄZELIKLER",
            ],
            promo: {
                location: "Türkmenistan · Merkezi Aziýa · Global gerim",
                subtitle: "Türkmenistandaky hyzmatdaşyňyz",
                cta: "Hyzmatdaşlygy başlamak",
                video: "IFT 2026 seretmek",
            },
            about: {
                label: "BIZ BARADA",
                darkText: "Maýa bilen",
                primaryText: "mümkinçiligiň köprüsi",
                text:
                    "daşary ýurt maýa goýumlaryny goldamak, halkara hyzmatdaşlygy ösdürmek we Merkezi Aziýada işewürlik çärelerini guramak boýunça ýöriteleşen konsalting kompaniýasydyr. Biz maýa goýum we biznes taslamalaryna toplumlaýyn goldaw berýäris.",
                advantages: [
                    "Türkmenistanda döwlet edaralary bilen göni aragatnaşyk",
                    "500+ maýadar we hyzmatdaşdan ybarat şahsy baza",
                    "IFT forumynyň guramaçysy",
                    "Pikirden şertnama çenli doly goldaw",
                    "Üç dilde iş: rus, iňlis we türkmen dilleri",
                ],
            },
            services: {
                label: "Hyzmatlarymyz",
                darkText: "Biz näme ",
                primaryText: "edýäris",
                text:
                    "Biz pikirleri, maýany we tehnologiýany birleşdirip, biznesiňiziň Merkezi Aziýada ynamly ösmegine kömek edýäris.",
                cta: "Giňişleýin",
            },
            projects: {
                label: "TASLAMALARYMYZ",
                darkText: "Esasy",
                primaryText: "taslamalar",
            },
            news: {
                label: "TÄZELIKLER",
                darkText: "Näme",
                primaryText: "täze",
                cta: "Ähli täzelikler",
            },
            contact: {
                label: "Şu gün başlaň",
                darkText: "Bazara",
                primaryText: "girmäge taýynmy?",
                text:
                    "TMT toparyndan şahsy maslahat alyň we Merkezi Aziýada biznesiňize nähili kömek edip biljekdigimizi biliň",
                cta: "Arza ibermek",
                direct: "Ýa-da göni ýazyň:",
            },
            partners: "Hyzmatdaşlarymyz we MEDIA HYZMATDAŞLAR",
        },
        about: {
            text:
                "TMT Consulting Group daşary ýurt maýa goýumlaryny çekmek we Merkezi Aziýada halkara derejeli işewürlik çärelerini guramak boýunça çuňňur tejribä eýe bolan dinamiki konsalting kompaniýasydyr. Biz biznes taslamalaryna toplumlaýyn goldaw berýäris we ýerli hem-de sebit bazarlaryna çykmaga kömek edýäris.",
            advantages: [
                "Türkmenistanda döwlet edaralary bilen göni aragatnaşyk",
                "500+ maýadar we hyzmatdaşdan ybarat şahsy baza",
                "IFT forumynyň guramaçysy",
                "Pikirden şertnama çenli doly goldaw",
                "Üç dilde iş: rus, iňlis we türkmen dilleri",
            ],
        },
        tourism: {
            heading: "TÜRKMENISTAN BOÝUNÇA SYÝAHATLAR:",
            text:
                "TMT Travel syýahatçylyk ugrunda ygtybarly we professional hyzmatdaşyňyzdyr. Tejribeli toparymyz ýokary hilli, tertipli we ýatdan çykmajak syýahatlary döretmäge çalyşýar.\n\nMyhmansöýerlik we her bir detala üns bermek bilen, her syýahatyň özboluşly, ylham beriji we ýatda galyjy bolmagyny üpjün edýäris.",
            points: [
                "Awia petekler we ýerleşmek",
                "Gastronomik tejribeler",
                "Ýerli syýahatlar we gidler",
                "Şahsy syýahat meýilnamalary",
                "Syýahat fotosurata düşürmek",
            ],
            imageAlt: [
                "Türkmenistandaky Darwaza",
                "Türkmenistandaky taryhy mawzoleý",
                "Türkmenistandaky Gutlug-Temir",
            ],
        },
        contacts: {
            formTitle: "Bize habar iberiň",
            formSubtitle: "Formany dolduryň, biz tiz wagtda habarlaşarys",
            name: "Ady",
            namePlaceholder: "Adyňyzy giriziň",
            company: "Kompaniýa",
            companyPlaceholder: "Kompaniýanyň adyny giriziň",
            email: "Elektron poçta",
            phone: "Telefon belgisi",
            message: "Habar",
            messagePlaceholder: "Size nädip kömek edip biljekdigimizi ýazyň...",
            submit: "Habary ibermek",
            bannerTitle: "Hyzmatdaşlyk gyzyklandyrýarmy?",
            bannerText:
                "Biznesiňiziň ösmegine nädip kömek edip biljekdigimizi ara alyp maslahatlaşalyň.",
            bannerCta: "Hyzmatlarymyz barada giňişleýin",
            infoTitle: "Habarlaşmak üçin",
            workingHours: "Iş wagty",
            weekdays: "Duşenbe - Anna",
            weekend: "Şenbe - Ýekşenbe",
            closed: "Dynç güni",
        },
        vacancy: {
            vacancies: "Iş orunlary",
            tenders: "Tenderler",
            allCategories: "Ähli kategoriýalar",
            allRegions: "Ähli sebitler",
            categories: "Kategoriýalar:",
            regions: "Welaýatlar:",
            noVacancies: "Häzirki wagtda iş orny ýok.",
            noTenders: "Häzirki wagtda tender ýok.",
            description: "beýany",
            requirements: "Talaplar",
            regionsList: ["Aşgabat", "Ahal", "Mary", "Lebap", "Daşoguz", "Balkan"],
        },
        footer: {
            description:
                "Merkezi Aziýadaky öňdebaryjy konsalting topary. Maýa goýumlar. Forumlar. Hyzmatdaşlyklar. B2G.",
            contacts: "Habarlaşmak",
            rights: "Ähli hukuklar goralan",
        },
    },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}
