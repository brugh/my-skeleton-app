<script lang="ts">
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { _ } from 'svelte-i18n';
	import LangSelect from './LangSelect.svelte';

	const navs = [
		{ href: '/', desc: 'home.main' },
		{ href: '/about', desc: 'home.about' },
		{ href: '/services', desc: 'home.services' },
		{ href: '/contact', desc: 'home.contact' }
	];

	const drawerClose = (): void => drawerStore.close();
	$: active = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<nav class="list-dl sm:list-nav flex justify-center">
	<ul class="flex flex-col sm:flex-row my-6 sm:!my-0">
		{#each navs as nav}
			<li class="{active(nav.href)} text-center leading-10 w-40 my-1 sm:!w-20 sm:!my-0">
				<a class="flex justify-center align-stretch" on:click={drawerClose} href={nav.href}>
					<span class="flex-auto">{$_(nav.desc)}</span>
				</a>
			</li>
		{/each}
		<LangSelect />
	</ul>
</nav>

<style lang="postcss">
	li:hover {
		background-color: rgb(var(--color-primary-200) / 0.1);
	}
</style>
