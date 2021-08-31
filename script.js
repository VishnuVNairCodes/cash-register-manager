"use strict";

const billAmount = document.querySelector(".bill-amount");
const cashGiven = document.querySelector(".cash-given");
const btnCheck = document.querySelector(".btn-check");
const btnNext = document.querySelector(".btn-next");
const msgBillNotFilled = document.querySelector(".bill-not-filled");
const msgBillNotNumber = document.querySelector(".bill-not-number");
const msgBillNotGreaterThanZero = document.querySelector(
  ".bill-not-greater-than-zero"
);
const msgCashNotFilled = document.querySelector(".cash-not-filled");
const msgCashNotNumber = document.querySelector(".cash-not-number");
const msgCashNotGreaterThanBill = document.querySelector(
  ".cash-not-greater-than-bill"
);
const containerCash = document.querySelector(".container-cash");
const tableReturnBalance = document.querySelector(".table-return-balance");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function changeWithMinimumNumberOfNotes(billAmount, cashGiven) {
  let balance = cashGiven - billAmount;

  const listNumberOfNotes = availableNotes.map(function (noteValue) {
    const numberOfNotes = Math.trunc(balance / noteValue);
    balance %= noteValue;
    return numberOfNotes;
  });
  for (let i = 0; i < listNumberOfNotes.length; i++) {
    noOfNotes[i].innerText = listNumberOfNotes[i];
  }
}

function btnNextClickHandler() {
  if (!msgBillNotFilled.classList.contains("hidden")) {
    msgBillNotFilled.classList.add("hidden");
  }
  if (!msgBillNotNumber.classList.contains("hidden")) {
    msgBillNotNumber.classList.add("hidden");
  }
  if (!msgBillNotGreaterThanZero.classList.contains("hidden")) {
    msgBillNotGreaterThanZero.classList.add("hidden");
  }
  if (billAmount.value > 0) {
    btnNext.classList.add("hidden");
    containerCash.classList.remove("hidden");
  } else if (billAmount.value === "") {
    msgBillNotFilled.classList.remove("hidden");
  } else if (isNaN(billAmount.value)) {
    msgBillNotNumber.classList.remove("hidden");
  } else {
    msgBillNotGreaterThanZero.classList.remove("hidden");
  }
}
function btnCheckClickHandler() {
  if (!msgCashNotFilled.classList.contains("hidden")) {
    msgCashNotFilled.classList.add("hidden");
  }
  if (!msgCashNotNumber.classList.contains("hidden")) {
    msgCashNotNumber.classList.add("hidden");
  }
  if (!msgCashNotGreaterThanBill.classList.contains("hidden")) {
    msgCashNotGreaterThanBill.classList.add("hidden");
  }
  if (cashGiven.value > Number(billAmount.value)) {
    changeWithMinimumNumberOfNotes(billAmount.value, cashGiven.value);
    tableReturnBalance.classList.remove("hidden");
  } else if (cashGiven.value === "") {
    msgCashNotFilled.classList.remove("hidden");
  } else if (isNaN(cashGiven.value)) {
    msgCashNotNumber.classList.remove("hidden");
  } else {
    msgCashNotGreaterThanBill.classList.remove("hidden");
  }
}

btnNext.addEventListener("click", btnNextClickHandler);
btnCheck.addEventListener("click", btnCheckClickHandler);
