import cn from "@/lib/utils/cn";

type ContactsFormProps = {
    className?: string;
};

export default function ContactsForm({ className }: ContactsFormProps) {
    return (
        <div
            className={cn(
                "rounded-[10px] bg-white px-5 py-6 shadow-[0px_4px_6px_0px_#C5CDEB] sm:px-8 sm:py-8 md:px-10 lg:px-16.75 lg:py-8.25",
                className,
            )}
        >
            <div className="font-main text-dark text-[20px] leading-tight font-bold sm:text-[22px]">
                Отправьте нам сообщение
            </div>
            <div className="font-main text-dark mt-2 text-sm font-medium sm:text-[16px]">
                Заполните форму, и мы свяжемся с вами в ближайшее время
            </div>

            <form className="mt-5.75 flex flex-col gap-6 sm:gap-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-8">
                    <div className="flex flex-col gap-2">
                        <label className="font-main text-dark text-[15px] font-semibold">
                            Имя <span className="text-primary">*</span>
                        </label>

                        <input
                            type="text"
                            placeholder="Введите ваше имя"
                            className="border-dark/30 focus:border-primary font-main font h-12 w-full rounded-md border bg-white px-4 text-[15px] text-[#C5CDEB] shadow-[0px_4px_3px_0px_#C5CDEB] transition outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-main text-dark text-[15px] font-semibold">
                            Компания
                        </label>

                        <input
                            type="text"
                            placeholder="Введите имя компании"
                            className="border-dark/30 focus:border-primary font-main font h-12 w-full rounded-md border bg-white px-4 text-[15px] text-[#C5CDEB] shadow-[0px_4px_3px_0px_#C5CDEB] transition outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-main text-dark text-[15px] font-semibold">
                            Электронная почта{" "}
                            <span className="text-primary">*</span>
                        </label>

                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="border-dark/30 focus:border-primary font-main font h-12 w-full rounded-md border bg-white px-4 text-[15px] text-[#C5CDEB] shadow-[0px_4px_3px_0px_#C5CDEB] transition outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-main text-dark text-[15px] font-semibold">
                            Номер телефона
                        </label>

                        <input
                            type="tel"
                            placeholder="+993 __"
                            className="border-dark/30 focus:border-primary font-main font h-12 w-full rounded-md border bg-white px-4 text-[15px] text-[#C5CDEB] shadow-[0px_4px_3px_0px_#C5CDEB] transition outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-main text-dark text-[15px] font-semibold">
                        Сообщение <span className="text-primary">*</span>
                    </label>

                    <textarea
                        rows={8}
                        placeholder="Расскажите, чем мы можем вам помочь..."
                        className="border-dark/30 focus:border-primary font-main font w-full resize-none rounded-md border bg-white px-4 py-4 text-[15px] text-[#C5CDEB] shadow-[0px_4px_3px_0px_#C5CDEB] transition outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover font-main w-full rounded-md px-6 py-2.5 text-[16px] font-bold text-white transition sm:w-fit sm:px-8.25 sm:text-[18px]"
                >
                    Отправить сообщение
                </button>
            </form>
        </div>
    );
}
