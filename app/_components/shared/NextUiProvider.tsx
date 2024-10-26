"use client"

import { FC, ReactNode } from "react"
import {NextUIProvider} from "@nextui-org/react";

type NextUiProviderProps = {
    children?: ReactNode;
}

const NextUiProvider: FC<NextUiProviderProps> = ({children}: NextUiProviderProps) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default NextUiProvider;