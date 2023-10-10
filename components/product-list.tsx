import { Product } from '@/types'
import NoResults from '@/components/ui/no-results'
import ProductCard from './ui/product-card'
import { QuickSort } from '@/hooks/algoritms/find-less'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Button from './ui/button'

interface ProductListProps {
	title: string
	items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
	const sortedArray = QuickSort(items)

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h3 className='font-bold text-3xl'>{title}</h3>
				{/* <div className='flex'>
					<h2 className='font-bold'>Sort by Price:</h2>
					<div className='flex items-center justify-end space-x-2 py-4'>
						<Button disabled={false}>
							<ArrowUp />
						</Button>
						<Button disabled={false}>
							<ArrowDown />
						</Button>
					</div>
				</div> */}
				{items.length === 0 && <NoResults />}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{items.map(item => (
						<ProductCard key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductList
