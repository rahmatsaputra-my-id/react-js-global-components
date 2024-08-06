export interface IPopUpProps {
    backgroundButtonColor?: string;
    isLoading?: boolean;
    popUpData?: TpopUpData;
    visible?: boolean;
}
export type TpopUpData = {
    description?: string;
    labelAccept?: string;
    onPressAccept?: any;
    title?: string;
};
