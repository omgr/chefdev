export interface ChefDevFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export interface ChefDevDropdownProps<T> {
    label: string;
    options: ChefDevDropdownOption<T>[];
    value?: ChefDevDropdownOption<T>;
    onChange?: (value: ChefDevDropdownOption<T>) => void;
    error?: string;
}

export interface ChefDevDropdownOption<T> {
    value: T;
    label: string;
}