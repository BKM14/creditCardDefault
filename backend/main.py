import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.metrics import accuracy_score, precision_score

df = pd.read_csv('data.csv')
df['IsDefaulter'] =df['default.payment.next.month']
df = df.drop('default.payment.next.month', axis=1)
X = df.drop('IsDefaulter', axis=1)
y = df['IsDefaulter']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
svm_clf = SVC(probability=True)
gnb_clf = GaussianNB()
tree_clf = DecisionTreeClassifier()
forest_clf = RandomForestClassifier(n_estimators=500, max_leaf_nodes=16)
bag_clf = VotingClassifier(estimators=[('svm_clf', svm_clf), ('gnb_clf', gnb_clf), ('tree_clf', tree_clf)], voting='soft', n_jobs=-1)

for clf in [svm_clf, gnb_clf, tree_clf, forest_clf, bag_clf]:
    clf.fit(X_train, y_train)
    y_pred = clf.predict(X_test)
    print(clf, accuracy_score(y_pred, y_test), precision_score(y_pred, y_test))
