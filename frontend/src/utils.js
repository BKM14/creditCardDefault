export const createRequestObject = (data, selectedModels) => {
    const [PAY_1, PAY_2, PAY_3, PAY_4, PAY_5, PAY_6] = data.repaymentStatus.split(" ");
    const [BILL_AMT1, BILL_AMT2, BILL_AMT3, BILL_AMT4, BILL_AMT5, BILL_AMT6] = data.billAmount.split(" ");
    const [PAY_AMT1, PAY_AMT2, PAY_AMT3, PAY_AMT4, PAY_AMT5, PAY_AMT6] = data.billAmount.split(" ");

    const requestObject = {
        modelsToUse: selectedModels,
        userData: [
        `${Math.floor(100000 + Math.random() * 900000)}`,
        data.creditLimit,
        data.sex,
       data.educationLevel,
        data.maritalStatus,
        data.age,
        PAY_1,
        PAY_2,
        PAY_3,
        PAY_4,
        PAY_5,
        PAY_6,
        BILL_AMT1,
        BILL_AMT2,
        BILL_AMT3,
        BILL_AMT4,
        BILL_AMT5,
        BILL_AMT6,
        PAY_AMT1,
        PAY_AMT2,
        PAY_AMT3,
        PAY_AMT4,
        PAY_AMT5,
        PAY_AMT6,
    ]}
    return JSON.stringify(requestObject)
}
