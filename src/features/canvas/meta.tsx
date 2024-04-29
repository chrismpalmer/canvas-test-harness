
export type NodeParam = {
    nodeType: string,
    nodeDesc: string,
    operator?: string[]
}
export const nodeTypes: NodeParam[] = [
    {
        nodeType: "AND",
        nodeDesc: "AND"
    },
    {
        nodeType: "OR",
        nodeDesc: "OR"
    },
    {
        nodeType: "GROUP",
        nodeDesc: "Group"
    },
    {
        nodeType: "PLAN",
        nodeDesc: "Plan"
    },
    {
        nodeType: "QUESTION",
        nodeDesc: "Question",
        operator: ["EQUAL"]
    },
    {
        nodeType: "TIER1",
        nodeDesc: "Tier 1 Generic",
        operator: ["EQUAL"]
    },
    {
        nodeType: "TIER2",
        nodeDesc: "Tier 2 Preferred Brand",
        operator: ["EQUAL"]
    },
    {
        nodeType: "TIER3",
        nodeDesc: "Tier 3 Non-Preferred Brand",
        operator: ["EQUAL"]
    },
    {
        nodeType: "TIER4",
        nodeDesc: "Tier 4 Speciality",
        operator: ["EQUAL"]
    },
    {
        nodeType: "ACCUMULATOR",
        nodeDesc: "Accumulator",
        operator: ["EQUAL"]
    },
    {
        nodeType: "DAYS_SUPPLY",
        nodeDesc: "Days Supply",
        operator: ["MIN","MAX"]
    },
    {
        nodeType: "COPAY",
        nodeDesc: "Copay",
        operator: ["AMT","PER"]
    },
    {
        nodeType: "AMOUNT",
        nodeDesc: "Amount",
        operator: ["MIN","MAX"]
    },
    {
        nodeType: "ROUTE",
        nodeDesc: "Route",
        operator: ["IN,EQUAL"]
    },
    {
        nodeType: "STC",
        nodeDesc: "Stc",
        operator: ["IN,EQUAL"]
    },
    {
        nodeType: "SPECIALITY",
        nodeDesc: "Speciality",
        operator: ["IN,EQUAL","NOT_EQUAL","NOT_IN"]
    },
    {
        nodeType: "HICL",
        nodeDesc: "Hicl",
        operator: ["IN,EQUAL","NOT_EQUAL","NOT_IN"]
    },
    {
        nodeType: "NDC",
        nodeDesc: "Ndc",
        operator: ["IN,EQUAL"]
    },
    // {
    //     nodeType: "DIAGNOSIS",
    //     nodeDesc: "Diagnosis",
    //     operator: ["EXACTLY","IN,EQUAL","NOT_EQUAL","NOT_IN","AT_LEAST"]
    // },
    // {
    //     nodeType: "LAB_RESULT",
    //     nodeDesc: "Lab Result",
    //     operator: ["AT_MOST","EQUAL","GREATER_THAN","BETWEEN","LESS_THAN","AT_LEAST"]
    // },
    // {
    //     nodeType: "CONCURRENT_DRUGS",
    //     nodeDesc: "Concurrent Drugs",
    //     operator: ["EQUAL"]
    // },
    {
        nodeType: "AGE",
        nodeDesc: "Age",
        operator: ["AT_MOST","EQUAL","GREATER_THAN","BETWEEN","LESS_THAN","AT_LEAST"]
    }
    
]