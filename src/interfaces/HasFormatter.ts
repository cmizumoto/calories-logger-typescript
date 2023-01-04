// Creating this interface we can make a small method/rule to ensure something is a string (or number or whatever)
export interface HasFormatter {
  format(): string;
}
