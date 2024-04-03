export type Experience = {
    name: string;
    description: string;
    company: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean; // Define whether the experiment is still taking place
}