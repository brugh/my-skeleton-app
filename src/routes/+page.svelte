<script lang="ts">
	import { innerHeight, scrollY, sectionHeight } from '$lib/store';
	import { _ } from 'svelte-i18n';

	let div: HTMLDivElement;
	let section: HTMLElement;
	$: percent = Math.min(1, $scrollY / ($sectionHeight - $innerHeight));
	let count = 6;
</script>

<h1>{$_('home.title')} {$scrollY}</h1>
<section bind:this={section} bind:offsetHeight={$sectionHeight}>
	<div
		bind:this={div}
		class="pin !bg-gray-400 flex flex-col justify-between content-end"
		style={`--top:${percent * ($sectionHeight- div?.offsetHeight)}px`}
	>
		<span class="text-lg">
			{Math.round($scrollY)} of {$innerHeight} <br />
			{$sectionHeight}
			{Math.round(100 * percent)}%
		</span>
		<span>
			<button
				on:click={() => (count > 1 ? (count = count - 1) : '')}
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				-
			</button>
			<button
				on:click={() => (count < 10 ? (count = count + 1) : '')}
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				+
			</button>
		</span>
	</div>

	{#each { length: count } as _, i}
		<div>{i + 1}</div>
	{/each}
</section>

<style lang="postcss">
	section {
		position: relative;
	}
	div {
		width: 250px;
		aspect-ratio: 1;
		@apply mb-6 bg-primary-400;
	}
	div:last-child {
		@apply mb-0;
	}
	.pin {
		@apply ml-6;
		position: absolute;
		left: 250px;
		top: var(--top);
	}
</style>
