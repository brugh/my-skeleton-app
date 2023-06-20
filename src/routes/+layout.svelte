<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import '$lib/i18n' // Import to initialize. Important :)
	import { _ } from 'svelte-i18n'

	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import { innerHeight, scrollY } from '$lib/store';
	import NavBar from '$lib/components/ui/NavBar.svelte';
	import Hamburger from '$lib/components/ui/Hamburger.svelte';

	const scrollHandler = (event: Event) => scrollY.set((event.target as HTMLDivElement)?.scrollTop);
</script>

<svelte:head><title>{$_('home.title')}</title></svelte:head>
<svelte:window bind:innerHeight={$innerHeight} />

<Drawer><NavBar /></Drawer>

<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<div class="bg-surface-100-800-token w-full">
			<div class="container flex flex-row mx-auto">
				<AppBar class="w-full grow">
					<svelte:fragment slot="lead">
						<strong class="text-xl uppercase">Skeleton</strong>
					</svelte:fragment>
					<svelte:fragment slot="trail">
						<Hamburger />
						<span class="hidden sm:block">
							<NavBar />
						</span>
					</svelte:fragment>
				</AppBar>
			</div>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="container mx-auto">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<div class="bg-surface-100-800-token w-full py-6 flex justify-center">Footer</div>
	</svelte:fragment>
</AppShell>

<style lang="postcss">

</style>
