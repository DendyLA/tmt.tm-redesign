import cn from '@/lib/utils/cn'

type ContactsFormProps = {
	className?: string;
}


export default function ContactsForm({className}: ContactsFormProps) {

	return(
		<div className={cn('rounded-[10px] bg-white shadow-[0px_4px_6px_0px_#C5CDEB] py-8.25 px-16.75', className)}>
			<div className="font-bold font-main text-[22px] text-dark">Отправьте нам сообщение</div>
			<div className="font-medium text-[16px] font-main text-dark">Заполните форму, и мы свяжемся с вами в ближайшее время</div>

			<form className="flex flex-col gap-8 mt-5.75">
				<div className="grid grid-cols-2 gap-x-15 gap-y-8">
					<div className="flex flex-col gap-2">
						<label className="font-main text-dark text-[15px] font-semibold">
							Имя <span className="text-primary">*</span>
						</label>

						<input
							type="text"
							placeholder="Введите ваше имя"
							className="border-dark/30 focus:border-primary shadow-[0px_4px_3px_0px_#C5CDEB] h-12 rounded-md border bg-white px-4 text-[15px] outline-none transition font-main font text-[#C5CDEB]"
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
							className="border-dark/30 focus:border-primary shadow-[0px_4px_3px_0px_#C5CDEB] h-12 rounded-md border bg-white px-4 text-[15px] outline-none transition font-main font text-[#C5CDEB]"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label className="font-main text-dark text-[15px] font-semibold">
							Электронная почта <span className="text-primary">*</span>
						</label>

						<input
							type="email"
							placeholder="example@gmail.com"
							className="border-dark/30 focus:border-primary shadow-[0px_4px_3px_0px_#C5CDEB] h-12 rounded-md border bg-white px-4 text-[15px] outline-none transition font-main font text-[#C5CDEB]"
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
							className="border-dark/30 focus:border-primary shadow-[0px_4px_3px_0px_#C5CDEB] h-12 rounded-md border bg-white px-4 text-[15px] outline-none transition font-main font text-[#C5CDEB]"
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
						className="border-dark/30 focus:border-primary shadow-[0px_4px_3px_0px_#C5CDEB] resize-none rounded-md border bg-white px-4 py-4 text-[15px] outline-none transition font-main font text-[#C5CDEB]"
						required
					/>
				</div>

				<button
					type="submit"
					className="bg-primary hover:bg-primary-hover font-main w-fit rounded-md px-8.25 py-2.5 text-[18px] font-bold text-white transition"
				>
					Отправить сообщение
				</button>
			</form>
		</div>
	)

}