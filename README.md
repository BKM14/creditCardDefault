# CreditGuard: Predict Credit Card Defaults with Confidence

CreditGuard is an advanced machine learning tool designed to analyze financial data and predict the likelihood of credit card defaults. This project leverages various machine learning algorithms to provide accurate predictions, helping users manage their financial future with confidence.

### Site live [here](https://credit-card-default.vercel.app)
## Project Overview

CreditGuard uses a dataset of credit card records to train multiple classifiers, including SVM, Gaussian Naive Bayes, Decision Trees, Random Forest, Voting Classifiers, Bagging, AdaBoost, and Gradient Boosting. Each model is fine-tuned using `GridSearchCV` to optimize performance. The models are then saved for future use and evaluation.

## Data Visualization

To gain insights from the data, various plots and visualizations are generated using `matplotlib` and `seaborn`. These include distribution plots, count plots, correlation heatmaps, box plots, and pair plots.

## Dataset

The dataset used in this project contains the following features:

- `ID`: Unique identifier for each record
- `LIMIT_BAL`: Credit limit balance
- `SEX`: Gender (1 = male, 2 = female)
- `EDUCATION`: Education level (1 = graduate school, 2 = university, 3 = high school, 4 = others)
- `MARRIAGE`: Marital status (1 = married, 2 = single, 3 = others)
- `AGE`: Age of the account holder
- `PAY_0` to `PAY_6`: Repayment status for the past 6 months
- `BILL_AMT1` to `BILL_AMT6`: Bill statement amounts for the past 6 months
- `PAY_AMT1` to `PAY_AMT6`: Payment amounts for the past 6 months
- `default.payment.next.month`: Default payment status (1 = defaulted, 0 = not defaulted)

## Project Structure

- `data.csv`: The dataset containing credit card records
- `main.py`: The main script that trains the models and saves them
- `visualizations.py`: Script to generate data visualizations
- `savedModels/`: Directory containing saved models
- `README.md`: Project documentation

## Visualizations

Various plots are generated to understand the data better:

- **Distribution Plots**: Show the distribution of credit limit, age, bill amounts, and payment amounts.
- **Count Plots**: Show the counts of gender, education levels, marital status, and default payments.
- **Correlation Heatmap**: Displays the correlation between different features.
- **Box Plots**: Show the relationship between different features and the credit limit.
- **Pair Plot**: Displays pairwise relationships in the dataset.

## Web Application

The CreditGuard web application is built using:

- **React**: For building the responsive user interface
- **TailwindCSS**: For styling and ensuring a responsive design
- **Flask**: As the backend framework to serve the machine learning models
- **Jupyter Notebook**: For data analysis and model training
