// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block < 42) {
    return 42 - block;
  } else if (block > 42) {
    return block - 42;
  } else {
    return 0;
  }
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice (start, end) {
  const distance = distanceTravelledInFeet (start, end);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return distance * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
