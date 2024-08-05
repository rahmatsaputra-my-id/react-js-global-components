export interface IPopUpProps {
    popUpData?: TpopUpData;
    isLoading?: boolean;
    visible?: boolean;
}
export type TpopUpData = {
    title?: string;
    description?: string;
    labelAccept?: string;
    onPressAccept?: any;
};
