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
            forumInfoCta: "Зарегистрироваться на форуме",
            forumDelegateCta: "Стать делегатом",
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
                certificatesTitle: "СЕРТИФИКАТЫ И ПАРТНЁРСТВА",
                certificatesSubtitle:
                    "Подтверждения экспертизы, доверия и международного сотрудничества TMT Consulting Group.",
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
        forums: {
            heroKicker: "Бизнес-форум",
            heroText:
                "Платформа для делового диалога Туркменистана и Китая, новых партнёрств, инвестиционных возможностей и прямых встреч с компаниями в рамках CIIE.",
            dateLabel: "Даты",
            venueLabel: "Место проведения",
            delegateCta: "Стать делегатом",
            aboutTitle: "О форуме",
            aboutText:
                "Форум объединяет предпринимателей, инвесторов, производителей, экспортёров и представителей деловых кругов для развития туркмено-китайского сотрудничества. Участники смогут представить свои компании, найти партнёров, обсудить экспортно-импортные возможности и выстроить новые деловые связи.",
            highlightsTitle: "Почему стоит участвовать",
            highlights: [
                "Прямой доступ к деловой аудитории в Китае",
                "Возможность представить компанию и продукцию потенциальным партнёрам",
                "Нетворкинг, B2B-встречи и сопровождение делегации",
                "Участие в международной выставочной повестке CIIE",
            ],
            hotelDescription:
                "Форум пройдёт в Шанхае, в Radisson Blu Forest Manor Shanghai Hongqiao.",
            hotelLink: "Посмотреть отель",
            hotelImageAlt: "Здание Radisson Blu Forest Manor Shanghai Hongqiao",
            programTitle: "Программа",
            dayLabel: "День",
              speakersTitle: "Спикеры",
              delegatesTitle: "Участники",
              sponsorsTitle: "Спонсоры",
              registration: {
                  title: "Регистрация на форум",
                  subtitle: "Заполните данные делегата и приложите необходимые документы.",
                  detailsTitle: "Данные делегата",
                  latinHint: "Имя, фамилию, компанию и должность укажите на английском языке. Страну выберите из списка.",
                  documentsTitle: "Фото и документы",
                  firstName: "Имя",
                  lastName: "Фамилия",
                  organization: "Компания",
                  position: "Должность",
                  email: "Электронная почта",
                  phone: "Номер телефона",
                  country: "Страна",
                  countryPlaceholder: "Название страны на английском",
                  countryNoResults: "Страна не найдена",
                  photo: "Фото делегата",
                  companyLogo: "Логотип компании",
                  internalPassport: "Скан внутреннего паспорта",
                  internalPassportVisaHint: "Обязателен для делегатов из Туркменистана для визовых процедур.",
                  foreignPassport: "Скан загранпаспорта",
                  optional: "необязательно",
                  imageHint: "JPG, PNG или WebP, до 4 МБ",
                  passportHint: "PDF, JPG, PNG или WebP, до 6 МБ",
                  chooseFile: "Выбрать файл",
                  submit: "Зарегистрироваться",
                  submitting: "Отправляем заявку...",
                  requiredError: "Заполните это поле.",
                  nameError: "Укажите не менее двух символов.",
                  latinError: "Заполните поле на английском языке.",
                  emailError: "Проверьте адрес электронной почты.",
                  phoneError: "Проверьте номер телефона.",
                  countryError: "Выберите страну из списка.",
                  fileRequiredError: "Прикрепите файл.",
                  fileTypeError: "Неподдерживаемый формат файла.",
                  fileSizeError: "Файл превышает допустимый размер.",
                  requestError: "Не удалось отправить заявку. Попробуйте ещё раз.",
                  rateLimitError: "Слишком много попыток. Повторите позже.",
                  unavailableError: "Регистрация сейчас недоступна. Попробуйте позже.",
                  successTitle: "Спасибо! Вы зарегистрированы на форум.",
                  successText: "С вами свяжется наш оператор.",
                  aboutCta: "Прочитать о нас",
                  close: "Закрыть",
              },
              travelTitle: "Организационное сопровождение",
            travelText:
                "Команда TMT сопровождает делегатов по ключевым организационным вопросам: регистрация участия, визовая поддержка, консультации по перелётам, проживание в Шанхае, трансферы и координация программы форума.",
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
            employerCta: "Стать нанимателем",
            allCategories: "Все категории",
            allRegions: "Все регионы",
            categories: "Категории:",
            regions: "Регионы:",
            noVacancies: "На данный момент нет вакансий.",
            noTenders: "На данный момент нет тендеров.",
            description: "описание",
            requirements: "Требования",
            register: {
                title: "Зарегистрироваться",
                description:
                    "Создайте аккаунт, чтобы размещать вакансии и находить лучших специалистов для вашей компании.",
                email: "Электронная почта",
                emailPlaceholder: "example@gmail.com",
                password: "Пароль",
                passwordHint:
                    "* Пароль должен содержать не менее 6 символов, включая буквы и цифры.",
                termsStart: "Я согласен с",
                privacy: "Политикой Конфиденциальности",
                termsMiddle: "и",
                terms: "Условиями использования",
                submit: "Зарегистрироваться",
                hasAccount: "Уже есть аккаунт?",
                login: "Войти",
                success:
                    "Аккаунт создан. Проверьте почту, чтобы подтвердить регистрацию.",
                errors: {
                    fields: "Заполните электронную почту и пароль.",
                    terms: "Подтвердите согласие с условиями.",
                    password:
                        "Пароль должен содержать не менее 6 символов.",
                    exists: "Этот email уже зарегистрирован.",
                    failed:
                        "Не удалось зарегистрироваться. Попробуйте позже.",
                    network:
                        "Не удалось подключиться к серверу. Попробуйте позже.",
                },
            },
            login: {
                title: "Войти",
                description:
                    "Войдите в аккаунт, чтобы размещать вакансии и находить лучших специалистов для вашей компании.",
                email: "Электронная почта",
                emailPlaceholder: "example@gmail.com",
                password: "Пароль",
                forgotPassword: "Забыли пароль?",
                submit: "Войти",
                noAccount: "Нету аккаунта?",
                signup: "Зарегистрироваться",
                success: "Вход выполнен.",
                errors: {
                    fields: "Заполните электронную почту и пароль.",
                    password:
                        "Пароль должен содержать не менее 6 символов.",
                    credentials: "Неверная электронная почта или пароль.",
                    banned: "Этот аккаунт заблокирован.",
                    failed: "Не удалось войти. Попробуйте позже.",
                    network:
                        "Не удалось подключиться к серверу. Попробуйте позже.",
                },
            },
            verifyEmail: {
                title: "Подтвердите почту",
                sentTitle: "Письмо отправлено",
                sentText:
                    "Мы отправили ссылку для подтверждения на вашу электронную почту.",
                spamText:
                    "Если письма нет, проверьте папку «Спам» или отправьте ссылку ещё раз.",
                verifiedTitle: "Почта подтверждена",
                verifiedText:
                    "Email подтверждён. Теперь вы можете пользоваться аккаунтом.",
                failedTitle: "Не удалось подтвердить почту",
                failedText:
                    "Ссылка недействительна или срок её действия истёк.",
                resend: "Отправить письмо ещё раз",
                resent: "Письмо отправлено повторно.",
                login: "Войти",
                vacancies: "Перейти к вакансиям",
                errors: {
                    unauthorized:
                        "Войдите в аккаунт, чтобы отправить письмо повторно.",
                    failed:
                        "Не удалось отправить письмо. Попробуйте позже.",
                    network:
                        "Не удалось подключиться к серверу. Попробуйте позже.",
                },
            },
            reset: {
                back: "Назад",
                title: "Введите почту",
                email: "Электронная почта",
                emailPlaceholder: "example@gmail.com",
                submit: "Далее",
                noAccount: "Нету аккаунта?",
                signup: "Зарегистрироваться",
                success:
                    "Если аккаунт с такой почтой существует, мы отправим инструкцию для восстановления.",
                errors: {
                    email: "Введите корректную электронную почту.",
                    failed:
                        "Не удалось отправить письмо. Попробуйте позже.",
                },
                create: {
                    title: "Создайте пароль",
                    successTitle: "Пароль обновлен",
                    newPassword: "Новый пароль",
                    confirmPassword: "Подтвердите Пароль",
                    passwordHint:
                        "* Пароль должен содержать не менее 6 символов, включая буквы и цифры.",
                    submit: "Создать",
                    success:
                        "Пароль обновлен. Теперь вы можете войти в аккаунт.",
                    errors: {
                        token: "Ссылка для сброса пароля недействительна.",
                        password:
                            "Пароль должен содержать не менее 6 символов.",
                        match: "Пароли должны совпадать.",
                        failed:
                            "Не удалось обновить пароль. Попробуйте позже.",
                    },
                },
            },
            regionsList: ["Ашхабад", "Ахал", "Мары", "Лебап", "Дашогуз", "Балкан"],
        },
        profile: {
            title: "Профиль",
            description: "Профиль пользователя TMT Consulting Group",
            statusMessages: {
                registered:
                    "Аккаунт создан. Мы отправили письмо для подтверждения email.",
                "email-verified": "Email подтверждён.",
                "vacancy-created":
                    "Вакансия создана и отправлена на модерацию.",
                "vacancy-updated":
                    "Вакансия обновлена и отправлена на модерацию.",
                "vacancy-deleted": "Вакансия удалена.",
            },
            errors: {
                "vacancy-delete":
                    "Не удалось удалить вакансию. Попробуйте позже.",
            },
            vacancies: {
                title: "Управление вакансиями",
                subtitle: "Добавляйте, редактируйте и управляйте вакансиями.",
                add: "Добавить вакансию",
                edit: "Редактировать",
                delete: "Удалить",
                deleteConfirm: {
                    title: "Удалить вакансию?",
                    text: "Вы уверены, что хотите удалить эту вакансию? Она исчезнет из вашего кабинета.",
                    cancel: "Отмена",
                    submit: "Удалить",
                },
                empty: "У вас пока нет вакансий.",
                noCategory: "—",
                previous: "Предыдущая страница",
                next: "Следующая страница",
                regions: ["Ашхабад", "Ахал", "Мары", "Лебап", "Дашогуз", "Балкан"],
                columns: {
                    position: "Должность",
                    category: "Категория",
                    location: "Локация",
                    date: "Дата",
                    status: "Статус",
                    actions: "Действия",
                },
                statuses: {
                    APPROVED: "Опубликована",
                    PENDING: "На модерации",
                    DRAFT: "Черновик",
                    REJECTED: "Отклонена",
                    ARCHIVED: "Архив",
                },
                form: {
                    createTitle: "Добавить вакансию",
                    editTitle: "Редактировать вакансию",
                    subtitle: "Заполните данные вакансии.",
                    back: "Назад",
                    title: "Должность",
                    category: "Категория",
                    selectCategory: "Выберите категорию",
                    location: "Локация",
                    selectLocation: "Выберите локацию",
                    contactEmail: "Контактная почта",
                    salary: "Зарплата",
                    description: "Описание",
                    requirements: "Требования",
                    createSubmit: "Создать вакансию",
                    editSubmit: "Сохранить изменения",
                    errors: {
                        fields: "Заполните все обязательные поля.",
                        email: "Введите корректную электронную почту.",
                        failed:
                            "Не удалось сохранить вакансию. Попробуйте позже.",
                    },
                },
            },
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
            forumInfoCta: "Register for the forum",
            forumDelegateCta: "Become a delegate",
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
                certificatesTitle: "CERTIFICATES AND PARTNERSHIPS",
                certificatesSubtitle:
                    "Proof of TMT Consulting Group expertise, trust and international cooperation.",
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
        forums: {
            heroKicker: "Business forum",
            heroText:
                "A platform for Turkmenistan-China business dialogue, new partnerships, investment opportunities and direct meetings with companies within the CIIE agenda.",
            dateLabel: "Dates",
            venueLabel: "Venue",
            delegateCta: "Become a delegate",
            aboutTitle: "About the forum",
            aboutText:
                "The forum brings together entrepreneurs, investors, manufacturers, exporters and business representatives to develop Turkmenistan-China cooperation. Participants can present their companies, find partners, discuss export and import opportunities and build new business connections.",
            highlightsTitle: "Why participate",
            highlights: [
                "Direct access to a business audience in China",
                "Opportunity to present your company and products to potential partners",
                "Networking, B2B meetings and delegation support",
                "Participation in the international CIIE exhibition agenda",
            ],
            hotelDescription:
                "The forum will take place at Radisson Blu Forest Manor Shanghai Hongqiao.",
            hotelLink: "View hotel",
            hotelImageAlt: "Radisson Blu Forest Manor Shanghai Hongqiao exterior",
            programTitle: "Programme",
            dayLabel: "Day",
              speakersTitle: "Speakers",
              delegatesTitle: "Participants",
              sponsorsTitle: "Sponsors",
              registration: {
                  title: "Forum registration",
                  subtitle: "Enter the delegate's details and attach the required documents.",
                  detailsTitle: "Delegate details",
                  latinHint: "Enter your name, company and position in English. Choose a country from the list.",
                  documentsTitle: "Photo and documents",
                  firstName: "First name",
                  lastName: "Last name",
                  organization: "Company",
                  position: "Position",
                  email: "Email",
                  phone: "Phone number",
                  country: "Country",
                  countryPlaceholder: "Country name in English",
                  countryNoResults: "No country found",
                  photo: "Delegate photo",
                  companyLogo: "Company logo",
                  internalPassport: "Internal passport scan",
                  internalPassportVisaHint: "Required for delegates from Turkmenistan for visa processing.",
                  foreignPassport: "International passport scan",
                  optional: "optional",
                  imageHint: "JPG, PNG or WebP, up to 4 MB",
                  passportHint: "PDF, JPG, PNG or WebP, up to 6 MB",
                  chooseFile: "Choose file",
                  submit: "Register",
                  submitting: "Submitting registration...",
                  requiredError: "Please fill in this field.",
                  nameError: "Enter at least two characters.",
                  latinError: "Please complete this field in English.",
                  emailError: "Check your email address.",
                  phoneError: "Check your phone number.",
                  countryError: "Choose a country from the list.",
                  fileRequiredError: "Attach a file.",
                  fileTypeError: "Unsupported file format.",
                  fileSizeError: "The file is too large.",
                  requestError: "Could not submit your registration. Please try again.",
                  rateLimitError: "Too many attempts. Please try again later.",
                  unavailableError: "Registration is currently unavailable. Please try again later.",
                  successTitle: "Thank you! You are registered for the forum.",
                  successText: "Our coordinator will contact you.",
                  aboutCta: "Learn about us",
                  close: "Close",
              },
              travelTitle: "Organizational support",
            travelText:
                "The TMT team supports delegates with key organizational matters: participation registration, visa support, flight guidance, accommodation in Shanghai, transfers and coordination of the forum programme.",
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
            employerCta: "Become an employer",
            allCategories: "All categories",
            allRegions: "All regions",
            categories: "Categories:",
            regions: "Regions:",
            noVacancies: "There are no vacancies at the moment.",
            noTenders: "There are no tenders at the moment.",
            description: "description",
            requirements: "Requirements",
            register: {
                title: "Register",
                description:
                    "Create an account to publish vacancies and find the best specialists for your company.",
                email: "Email",
                emailPlaceholder: "example@gmail.com",
                password: "Password",
                passwordHint:
                    "* Password must contain at least 6 characters, including letters and numbers.",
                termsStart: "I agree with the",
                privacy: "Privacy Policy",
                termsMiddle: "and",
                terms: "Terms of Use",
                submit: "Register",
                hasAccount: "Already have an account?",
                login: "Log in",
                success:
                    "Account created. Check your email to confirm registration.",
                errors: {
                    fields: "Fill in email and password.",
                    terms: "Please accept the terms.",
                    password:
                        "Password must contain at least 6 characters.",
                    exists: "This email is already registered.",
                    failed: "Could not register. Please try again later.",
                    network:
                        "Could not connect to the server. Please try again later.",
                },
            },
            login: {
                title: "Log in",
                description:
                    "Log in to publish vacancies and find the best specialists for your company.",
                email: "Email",
                emailPlaceholder: "example@gmail.com",
                password: "Password",
                forgotPassword: "Forgot password?",
                submit: "Log in",
                noAccount: "No account?",
                signup: "Register",
                success: "You are logged in.",
                errors: {
                    fields: "Fill in email and password.",
                    password:
                        "Password must contain at least 6 characters.",
                    credentials: "Invalid email or password.",
                    banned: "This account is blocked.",
                    failed: "Could not log in. Please try again later.",
                    network:
                        "Could not connect to the server. Please try again later.",
                },
            },
            verifyEmail: {
                title: "Confirm email",
                sentTitle: "Verification email sent",
                sentText:
                    "We have sent a confirmation link to your email address.",
                spamText:
                    "If you do not see the email, check your spam folder or send the link again.",
                verifiedTitle: "Email confirmed",
                verifiedText:
                    "Your email has been confirmed. You can now use your account.",
                failedTitle: "Could not confirm email",
                failedText:
                    "The confirmation link is invalid or has expired.",
                resend: "Send email again",
                resent: "Verification email sent again.",
                login: "Log in",
                vacancies: "Go to vacancies",
                errors: {
                    unauthorized:
                        "Log in to your account to send the email again.",
                    failed: "Could not send the email. Please try again later.",
                    network:
                        "Could not connect to the server. Please try again later.",
                },
            },
            reset: {
                back: "Back",
                title: "Enter email",
                email: "Email",
                emailPlaceholder: "example@gmail.com",
                submit: "Next",
                noAccount: "No account?",
                signup: "Register",
                success:
                    "If an account with this email exists, we will send password recovery instructions.",
                errors: {
                    email: "Enter a valid email address.",
                    failed: "Could not send the email. Please try again later.",
                },
                create: {
                    title: "Create password",
                    successTitle: "Password updated",
                    newPassword: "New password",
                    confirmPassword: "Confirm password",
                    passwordHint:
                        "* Password must contain at least 6 characters, including letters and numbers.",
                    submit: "Create",
                    success:
                        "Password updated. You can now log in to your account.",
                    errors: {
                        token: "The password reset link is invalid.",
                        password:
                            "Password must contain at least 6 characters.",
                        match: "Passwords must match.",
                        failed:
                            "Could not update password. Please try again later.",
                    },
                },
            },
            regionsList: ["Ashgabat", "Ahal", "Mary", "Lebap", "Dashoguz", "Balkan"],
        },
        profile: {
            title: "Profile",
            description: "TMT Consulting Group user profile",
            statusMessages: {
                registered:
                    "Account created. We have sent an email confirmation link.",
                "email-verified": "Email confirmed.",
                "vacancy-created":
                    "Vacancy created and sent for moderation.",
                "vacancy-updated":
                    "Vacancy updated and sent for moderation.",
                "vacancy-deleted": "Vacancy deleted.",
            },
            errors: {
                "vacancy-delete":
                    "Could not delete the vacancy. Please try again later.",
            },
            vacancies: {
                title: "Vacancy management",
                subtitle: "Add, edit, and manage vacancies.",
                add: "Add vacancy",
                edit: "Edit",
                delete: "Delete",
                deleteConfirm: {
                    title: "Delete vacancy?",
                    text: "Are you sure you want to delete this vacancy? It will disappear from your dashboard.",
                    cancel: "Cancel",
                    submit: "Delete",
                },
                empty: "You do not have vacancies yet.",
                noCategory: "—",
                previous: "Previous page",
                next: "Next page",
                regions: ["Ashgabat", "Ahal", "Mary", "Lebap", "Dashoguz", "Balkan"],
                columns: {
                    position: "Position",
                    category: "Category",
                    location: "Location",
                    date: "Date",
                    status: "Status",
                    actions: "Actions",
                },
                statuses: {
                    APPROVED: "Published",
                    PENDING: "In moderation",
                    DRAFT: "Draft",
                    REJECTED: "Rejected",
                    ARCHIVED: "Archived",
                },
                form: {
                    createTitle: "Add vacancy",
                    editTitle: "Edit vacancy",
                    subtitle: "Fill in vacancy details.",
                    back: "Back",
                    title: "Position",
                    category: "Category",
                    selectCategory: "Select category",
                    location: "Location",
                    selectLocation: "Select location",
                    contactEmail: "Contact email",
                    salary: "Salary",
                    description: "Description",
                    requirements: "Requirements",
                    createSubmit: "Create vacancy",
                    editSubmit: "Save changes",
                    errors: {
                        fields: "Fill in all required fields.",
                        email: "Enter a valid email address.",
                        failed:
                            "Could not save the vacancy. Please try again later.",
                    },
                },
            },
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
            forumInfoCta: "Forumda hasaba durmak",
            forumDelegateCta: "Delegat bolmak",
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
                certificatesTitle: "SERTIFIKATLAR WE HYZMATDAŞLYKLAR",
                certificatesSubtitle:
                    "TMT Consulting Group tejribesini, ynamy we halkara hyzmatdaşlygy tassyklaýan resminamalar.",
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
        forums: {
            heroKicker: "Işewürlik forumy",
            heroText:
                "Türkmenistan bilen Hytaýyň işewür dialogy, täze hyzmatdaşlyklar, maýa goýum mümkinçilikleri we CIIE çäklerinde kompaniýalar bilen göni duşuşyklar üçin platforma.",
            dateLabel: "Seneler",
            venueLabel: "Geçirilýän ýeri",
            delegateCta: "Delegat bolmak",
            aboutTitle: "Forum barada",
            aboutText:
                "Forum türkmen-hytaý hyzmatdaşlygyny ösdürmek üçin telekeçileri, maýadarlary, öndürijileri, eksportçylary we işewür toparlaryň wekillerini birleşdirýär. Gatnaşyjylar kompaniýalaryny tanyşdyryp, hyzmatdaş tapyp, eksport-import mümkinçiliklerini ara alyp maslahatlaşyp bilerler.",
            highlightsTitle: "Näme üçin gatnaşmaly",
            highlights: [
                "Hytaýdaky işewür auditoriýa bilen göni aragatnaşyk",
                "Kompaniýaňyzy we önümleriňizi potensial hyzmatdaşlara tanyşdyrmak mümkinçiligi",
                "Netwörking, B2B duşuşyklar we delegasiýa goldawy",
                "CIIE halkara sergi maksatnamasyna gatnaşmak",
            ],
            hotelDescription:
                "Forum Şanhaýdaky Radisson Blu Forest Manor Shanghai Hongqiao myhmanhanasynda geçiriler.",
            hotelLink: "Myhmanhana seret",
            hotelImageAlt: "Radisson Blu Forest Manor Shanghai Hongqiao myhmanhanasy",
            programTitle: "Maksatnama",
            dayLabel: "Gün",
              speakersTitle: "Çykyş edýänler",
              delegatesTitle: "Gatnaşyjylar",
              sponsorsTitle: "Hemaýatkärler",
              registration: {
                  title: "Forumda hasaba alyş",
                  subtitle: "Delegatyň maglumatlaryny giriziň we zerur resminamalary goşuň.",
                  detailsTitle: "Delegatyň maglumatlary",
                  latinHint: "Adyňyzy, familiýaňyzy, kompaniýaňyzy we wezipäňizi iňlis dilinde ýazyň. Ýurdy sanawdan saýlaň.",
                  documentsTitle: "Surat we resminamalar",
                  firstName: "Ady",
                  lastName: "Familiýasy",
                  organization: "Kompaniýa",
                  position: "Wezipesi",
                  email: "Elektron poçta",
                  phone: "Telefon belgisi",
                  country: "Ýurt",
                  countryPlaceholder: "Ýurdyň iňlisçe ady",
                  countryNoResults: "Ýurt tapylmady",
                  photo: "Delegatyň suraty",
                  companyLogo: "Kompaniýanyň nyşany",
                  internalPassport: "Içerki pasportyň nusgasy",
                  internalPassportVisaHint: "Türkmenistanyň delegatlary üçin wiza resmileşdirmekde hökmany.",
                  foreignPassport: "Daşary ýurt pasportynyň nusgasy",
                  optional: "hökmany däl",
                  imageHint: "JPG, PNG ýa-da WebP, 4 MB çenli",
                  passportHint: "PDF, JPG, PNG ýa-da WebP, 6 MB çenli",
                  chooseFile: "Faýl saýlaň",
                  submit: "Hasaba durmak",
                  submitting: "Maglumatlar iberilýär...",
                  requiredError: "Bu meýdany dolduryň.",
                  nameError: "Azyndan iki nyşan giriziň.",
                  latinError: "Bu meýdany iňlis dilinde dolduryň.",
                  emailError: "Elektron poçta salgysyny barlaň.",
                  phoneError: "Telefon belgisini barlaň.",
                  countryError: "Sanawdan ýurdy saýlaň.",
                  fileRequiredError: "Faýly goşuň.",
                  fileTypeError: "Faýl görnüşi goldanylmaýar.",
                  fileSizeError: "Faýlyň göwrümi rugsat edilen çäkden geçýär.",
                  requestError: "Hasaba alyş iberilmedi. Gaýtadan synanyşyň.",
                  rateLimitError: "Synanyşyklar juda köp. Soňrak gaýtadan synanyşyň.",
                  unavailableError: "Hasaba alyş häzir elýeterli däl. Soňrak synanyşyň.",
                  successTitle: "Sag boluň! Siz forumda hasaba alyndyňyz.",
                  successText: "Biziň operatorymyz siziň bilen habarlaşar.",
                  aboutCta: "Biz barada okaň",
                  close: "Ýapmak",
              },
              travelTitle: "Guramaçylyk goldawy",
            travelText:
                "TMT topary delegatlara esasy guramaçylyk meselelerinde goldaw berýär: gatnaşmagy hasaba almak, wiza goldawy, uçuşlar boýunça maslahat, Şanhaýda ýerleşmek, transferler we forum maksatnamasyny utgaşdyrmak.",
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
            employerCta: "Iş beriji bolmak",
            allCategories: "Ähli kategoriýalar",
            allRegions: "Ähli sebitler",
            categories: "Kategoriýalar:",
            regions: "Welaýatlar:",
            noVacancies: "Häzirki wagtda iş orny ýok.",
            noTenders: "Häzirki wagtda tender ýok.",
            description: "beýany",
            requirements: "Talaplar",
            register: {
                title: "Hasaba alynmak",
                description:
                    "Wakansiýalary ýerleşdirmek we kompaniýaňyz üçin iň gowy hünärmenleri tapmak üçin hasap dörediň.",
                email: "Elektron poçta",
                emailPlaceholder: "example@gmail.com",
                password: "Açar söz",
                passwordHint:
                    "* Açar söz azyndan 6 belgiden, harplardan we sanlardan ybarat bolmaly.",
                termsStart: "Men",
                privacy: "Gizlinlik syýasaty",
                termsMiddle: "we",
                terms: "Ulanyş şertleri",
                submit: "Hasaba alynmak",
                hasAccount: "Hasabyňyz barmy?",
                login: "Girmek",
                success:
                    "Hasap döredildi. Hasaba alyşy tassyklamak üçin poçtaňyzy barlaň.",
                errors: {
                    fields: "Elektron poçtany we açar sözi dolduryň.",
                    terms: "Şertler bilen razylygyňyzy tassyklaň.",
                    password: "Açar söz azyndan 6 belgiden ybarat bolmaly.",
                    exists: "Bu email eýýäm hasaba alnan.",
                    failed: "Hasaba almak başartmady. Biraz soň synanyşyň.",
                    network:
                        "Serwere birikmek başartmady. Biraz soň synanyşyň.",
                },
            },
            login: {
                title: "Girmek",
                description:
                    "Wakansiýalary ýerleşdirmek we kompaniýaňyz üçin iň gowy hünärmenleri tapmak üçin hasabyňyza giriň.",
                email: "Elektron poçta",
                emailPlaceholder: "example@gmail.com",
                password: "Açar söz",
                forgotPassword: "Açar sözi unutdyňyzmy?",
                submit: "Girmek",
                noAccount: "Hasabyňyz ýokmy?",
                signup: "Hasaba alynmak",
                success: "Giriş ýerine ýetirildi.",
                errors: {
                    fields: "Elektron poçtany we açar sözi dolduryň.",
                    password: "Açar söz azyndan 6 belgiden ybarat bolmaly.",
                    credentials: "Elektron poçta ýa-da açar söz nädogry.",
                    banned: "Bu hasap petiklendi.",
                    failed: "Girmek başartmady. Biraz soň synanyşyň.",
                    network:
                        "Serwere birikmek başartmady. Biraz soň synanyşyň.",
                },
            },
            verifyEmail: {
                title: "Poçtany tassyklaň",
                sentTitle: "Tassyklama haty ugradyldy",
                sentText:
                    "Elektron poçtaňyza tassyklama baglanyşygyny iberdik.",
                spamText:
                    "Hat görünmese, «Spam» bukjasyny barlaň ýa-da baglanyşygy täzeden iberiň.",
                verifiedTitle: "Poçta tassyklandy",
                verifiedText:
                    "Email tassyklandy. Indi hasabyňyzy ulanyp bilersiňiz.",
                failedTitle: "Poçtany tassyklap bolmady",
                failedText:
                    "Tassyklama baglanyşygy nädogry ýa-da möhleti gutaran.",
                resend: "Haty täzeden ibermek",
                resent: "Tassyklama haty täzeden ugradyldy.",
                login: "Girmek",
                vacancies: "Wakansiýalara geçmek",
                errors: {
                    unauthorized:
                        "Haty täzeden ibermek üçin hasabyňyza giriň.",
                    failed:
                        "Haty ibermek başartmady. Biraz soň synanyşyň.",
                    network:
                        "Serwere birikmek başartmady. Biraz soň synanyşyň.",
                },
            },
            reset: {
                back: "Yza",
                title: "Poçtaňyzy giriziň",
                email: "Elektron poçta",
                emailPlaceholder: "example@gmail.com",
                submit: "Indiki",
                noAccount: "Hasabyňyz ýokmy?",
                signup: "Hasaba alynmak",
                success:
                    "Bu email bilen hasap bar bolsa, dikeltmek boýunça görkezme ibereris.",
                errors: {
                    email: "Dogry elektron poçta giriziň.",
                    failed:
                        "Haty ibermek başartmady. Biraz soň synanyşyň.",
                },
                create: {
                    title: "Açar söz dörediň",
                    successTitle: "Açar söz täzelendi",
                    newPassword: "Täze açar söz",
                    confirmPassword: "Açar sözi tassyklaň",
                    passwordHint:
                        "* Açar söz azyndan 6 belgiden, harplardan we sanlardan ybarat bolmaly.",
                    submit: "Döretmek",
                    success:
                        "Açar söz täzelendi. Indi hasabyňyza girip bilersiňiz.",
                    errors: {
                        token:
                            "Açar sözi dikeltmek üçin baglanyşyk nädogry.",
                        password: "Açar söz azyndan 6 belgiden ybarat bolmaly.",
                        match: "Açar sözler gabat gelmeli.",
                        failed:
                            "Açar sözi täzelemek başartmady. Biraz soň synanyşyň.",
                    },
                },
            },
            regionsList: ["Aşgabat", "Ahal", "Mary", "Lebap", "Daşoguz", "Balkan"],
        },
        profile: {
            title: "Profil",
            description: "TMT Consulting Group ulanyjy profili",
            statusMessages: {
                registered:
                    "Hasap döredildi. Email tassyklama hatyny iberdik.",
                "email-verified": "Email tassyklandy.",
                "vacancy-created":
                    "Wakansiýa döredildi we moderasiýa iberildi.",
                "vacancy-updated":
                    "Wakansiýa täzelendi we moderasiýa iberildi.",
                "vacancy-deleted": "Wakansiýa öçürildi.",
            },
            errors: {
                "vacancy-delete":
                    "Wakansiýany öçürmek başartmady. Biraz soň synanyşyň.",
            },
            vacancies: {
                title: "Wakansiýalary dolandyrmak",
                subtitle: "Wakansiýalary goşuň, redaktirläň we dolandyryň.",
                add: "Wakansiýa goşmak",
                edit: "Redaktirlemek",
                delete: "Öçürmek",
                deleteConfirm: {
                    title: "Wakansiýany öçürmelimi?",
                    text: "Bu wakansiýany öçürmek isleýändigiňize ynamyňyz barmy? Ol kabinetiňizden aýrylar.",
                    cancel: "Ýatyrmak",
                    submit: "Öçürmek",
                },
                empty: "Sizde entek wakansiýa ýok.",
                noCategory: "—",
                previous: "Öňki sahypa",
                next: "Indiki sahypa",
                regions: ["Aşgabat", "Ahal", "Mary", "Lebap", "Daşoguz", "Balkan"],
                columns: {
                    position: "Wezipe",
                    category: "Kategoriýa",
                    location: "Ýerleşýän ýeri",
                    date: "Sene",
                    status: "Status",
                    actions: "Hereketler",
                },
                statuses: {
                    APPROVED: "Çap edildi",
                    PENDING: "Moderasiýada",
                    DRAFT: "Garalama",
                    REJECTED: "Ret edildi",
                    ARCHIVED: "Arhiw",
                },
                form: {
                    createTitle: "Wakansiýa goşmak",
                    editTitle: "Wakansiýany redaktirlemek",
                    subtitle: "Wakansiýanyň maglumatlaryny dolduryň.",
                    back: "Yza",
                    title: "Wezipe",
                    category: "Kategoriýa",
                    selectCategory: "Kategoriýany saýlaň",
                    location: "Ýerleşýän ýeri",
                    selectLocation: "Ýeri saýlaň",
                    contactEmail: "Habarlaşmak üçin email",
                    salary: "Aýlyk",
                    description: "Beýany",
                    requirements: "Talaplar",
                    createSubmit: "Wakansiýa döretmek",
                    editSubmit: "Üýtgetmeleri saklamak",
                    errors: {
                        fields: "Ähli hökmany meýdanlary dolduryň.",
                        email: "Dogry elektron poçta giriziň.",
                        failed:
                            "Wakansiýany saklamak başartmady. Biraz soň synanyşyň.",
                    },
                },
            },
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
