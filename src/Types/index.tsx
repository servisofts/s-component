// --- SERVISOFTS TYPES ---
import { SViewProps } from '../Component/SView/index';
import { STextProps } from '../Component/SText/index';
import { SComponentContainerProps } from '../Component/SComponentContainer/index';
import { SNavigationProps, SPageProps, SPageListProps } from '../Component/SNavigation/index';
import { SThemeColors, SThemeOptions, SThemeProps, SThemeThemes } from '../Component/STheme/index';

// SCOL
type TColKey = "xs" | "sm" | "md" | "lg" | "xl";
type TColVal = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type TColStr = string
type SColType = { [index in TColKey]?: TColVal } | TColStr

//Direcciones
type SDirectionType = "row" | "column";


export type {
    SDirectionType, SColType, TColStr, TColVal, TColKey,
    SViewProps,
    STextProps,
    SComponentContainerProps,
    SNavigationProps, SPageProps, SPageListProps,
    SThemeColors, SThemeOptions, SThemeProps, SThemeThemes
}
