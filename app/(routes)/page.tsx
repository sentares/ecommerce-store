import getBillboard from '@/actions/get-billboard'
import getCategories from '@/actions/get-categories'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true })
	const billboard = await getBillboard('5e69ff65-66e6-46e5-8edc-56ffdd06e1c7')
	const categories = await getCategories()

	console.log(categories, 'categories')

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
				<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</Container>
	)
}

export default HomePage
