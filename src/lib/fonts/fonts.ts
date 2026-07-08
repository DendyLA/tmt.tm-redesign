import localFont from "next/font/local";

export const manrope = localFont({
    src: "../../../public/fonts/Manrope-VariableFont.ttf",
    variable: "--font-manrope",
});

export const avenir = localFont({
    src: [
        {
            path: "../../../public/fonts/AvenirNextCyr-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/fonts/AvenirNextCyr-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../public/fonts/AvenirNextCyr-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-avenir",
});
