export type IdeaType = {
    "Target Market": string;
    Problem:         Problem;
    Solution:        string;
    "Survey Method": string[];
    Prototype:       string;
    Competitor:      string[];
}

export type Problem = {
    Assumption: string[];
    Fact:       string[];
}