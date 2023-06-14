<script lang="ts">
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';

	const navs = [
		{ href: '/', desc: 'Home' },
		{ href: '/about', desc: 'About' },
		{ href: '/services', desc: 'Services' },
		{ href: '/contact', desc: 'Contact' }
	];
  
	const drawerClose = ():void => drawerStore.close();
</script>

<nav class="list-dl sm:list-nav flex justify-center mt-4 sm:mt-0">
	<ul class="flex flex-col sm:flex-row">
		{#each navs as nav}
			<li class="mx-auto p-3 sm:p-0 sm:!my-0 {$page.url.pathname === nav.href ? 'active' : ''}">
				<a on:click={drawerClose} href={nav.href}><span class="flex-auto">{nav.desc}</span></a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	.active {
		text-decoration: underline;
	}
</style>
