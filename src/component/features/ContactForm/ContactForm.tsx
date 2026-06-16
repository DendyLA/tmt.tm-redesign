"use client";

import { useState } from "react";
import Input from "@/component/ui/Input/Input";
import Textarea from "@/component/ui/Textarea/Textarea";
import Button from "@/component/ui/Button/Button";

export default function ContactForm() {
    return (
        <div className="border-primary max-h-120 max-w-153.75 rounded-lg border bg-white px-11 py-12">
            <form action="">
                <div className="flex gap-10">
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

                <div className="mt-4 flex gap-10">
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
