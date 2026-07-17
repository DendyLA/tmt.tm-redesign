"use client";

import { useState } from "react";
import Input from "@/component/ui/Input/Input";
import Textarea from "@/component/ui/Textarea/Textarea";
import Button from "@/component/ui/Button/Button";

export default function ContactForm() {
    return (
        <div className="border-primary max-h-[90vh] w-[calc(100vw-2rem)] max-w-153.75 overflow-y-auto rounded-lg border bg-white px-5 py-6 sm:max-h-120 sm:px-11 sm:py-12">
            <form action="">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <Input
                        placeholder="Введите ваше имя"
                        label="Имя"
                        id="name"
                        required
                    />
                    <Input
                        placeholder="Введите имя компании"
                        label="Компания"
                        id="company"
                    />
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <Input
                        placeholder="example@gmail.com"
                        label="Электронная почта"
                        id="email"
                        required
                    />
                    <Input
                        placeholder="+993 __"
                        label="Номер телефона"
                        id="phoneNumber"
                    />
                </div>

                <div className="mt-3.5">
                    <Textarea
                        label="Сообщение"
                        required
                        placeholder="Расскажите, чем мы можем вам помочь..."
                    />
                </div>
                <div className="mt-3.5 flex items-center justify-center">
                    <Button type="submit" className="h-7.25 text-[12px]">
                        Отправить
                    </Button>
                </div>
            </form>
        </div>
    );
}
