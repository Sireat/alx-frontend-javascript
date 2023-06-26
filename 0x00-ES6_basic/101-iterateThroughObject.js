export default function iterateThroughObject(reportWithIterator) {
    let result = '';
    let iteration = reportWithIterator.next();
    
    while (!iteration.done) {
      result += `${iteration.value} | `;
      iteration = reportWithIterator.next();
    }
    
    return result.slice(0, -3); // Remove the trailing " | "
  }
  