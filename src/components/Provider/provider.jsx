import {routeTree} from '/src/routeTree.gen.ts';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider, createRouter} from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();
const router = createRouter({
	routeTree,
	context: {authentication: undefined},
});

export const Provider = () => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router}/>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);