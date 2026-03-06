function spendMoney(jar, amount){

data[jar] -= amount;

saveData(data);

renderDashboard();

}