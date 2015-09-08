console.log('Finding Narcissistic numbers...');
import isNarcissisticNumber from './isNarcissisticNumber';

var i = 0;

while (true) {
  const {
    is, explanation
  } = isNarcissisticNumber(i++);

  if (is) {
    console.log(explanation);
  }
};
