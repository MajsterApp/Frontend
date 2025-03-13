export interface ContextType {
    getListOfCities: (city: string) => Promise<void>;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;
