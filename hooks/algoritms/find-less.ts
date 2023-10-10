export const QuickSort = (array: any[]): any[] => {
	if (array.length <= 1) {
		return array
	}

	const pivotIndex = Math.floor(array.length / 2)
	const pivot = array[pivotIndex].price
	const less = []
	const greater = []

	for (let i = 0; i < array.length; i++) {
		if (i === pivotIndex) continue
		if (parseFloat(array[i].price) < parseFloat(pivot)) {
			less.push(array[i])
		} else {
			greater.push(array[i])
		}
	}

	return [...QuickSort(less), array[pivotIndex], ...QuickSort(greater)]
}
