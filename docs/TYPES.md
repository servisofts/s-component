##### by servisofts.com
# **servisofts-component** 

## Types
## [back](#https://github.com/servisofts/s-component/)
#### Type SDirectionType
  - "``row``" | "``column``"

#### Type SColType
  - { [``key`` in [TColKey](#type-tcolkey)]?: [TColVal](#type-tcolval) } | [TColStr](#type-tcolstr)

#### Type TColStr
  - "``xs-12 md-6``"

#### Type TColVal
  - "``1``" | "``2``" | "``3``" | "``4``" | "``5``" | "``6``" | "``7``" | "``8``" | "``9``" | "``10``" | "``11``" | "``12``" | "``8.543``" 

#### Type TColKey
  - ``"xs"`` | ``"sm"`` | ``"md"`` | ``"lg"`` | ``"xl"``

#### Type SViewProps
  - col?: [SColType](#type-scoltype)
  - dir?: [SDirectionType](#type-sdirectiontype)
  - props?: [SViewProps](#type-sviewprops)
  - style?: [ViewStyle](#type-viewstyle)
  - onPress?: Function

#### Type STextProps
  - col?: [SColType](#type-scoltype)
  - dir?: [SDirectionType](#type-sdirectiontype)
  - props?: [SViewProps](#type-sviewprops)
  - style?: [ViewStyle](#type-viewstyle)
  - onPress?: Function

#### Type SComponentContainerProps
  - theme: [SThemeProps](#type-sthemeprops)
  - debug: boolean
#### Type SNavigationProps
  - props:
      -  NavigationContainer: any,
      -  Stack: any,
      -  prefixes: [string],
      -  pages: { [name in string]: [SPageProps](#type-spageprops) }
#### Type SPageProps
  - initialTheme: [SThemeOptions](#type-sthemeoptions)
  - themes: [SThemeThemes](#type-sthemethemes)
  - onLoad: (color: [SThemeColors]("#type-sthemecolors")) => any

#### Type SPageListProps
  - url: string,
  - component: any,
  - options: { headerShown: boolean }
  
#### Type SThemeColors
  - barStyle: "``dark-content``" | "``light-content``"
  - barColor: string
  - primary: string
  - secondary: string
  - background: string

#### Type SThemeOptions
  - "``default``" | "``dark``"

#### Type SThemeProps
  - initialTheme: [SThemeOptions](#type-sthemeoptions)
  - themes: [SThemeThemes](#type-sthemethemes)
  - onLoad: (color: [SThemeColors](#type-sthemecolors)) => any

#### Type SThemeThemes
  - { [index in [SThemeOptions](#type-sthemeoptions)]: [SThemeColors](#type-sthemecolors) }