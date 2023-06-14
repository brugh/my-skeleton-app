<script lang="ts">
	import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';

  const drawerSettings: DrawerSettings = { 
    width: 'w-[50%]',
    padding: 'pt-16',
    position: 'right',
    height: 'h-60'
  }

	const drawerOpen = (): void => drawerStore.open(drawerSettings);
</script>

<button class="sm:hidden btn btn-sm ml-4" on:click={drawerOpen}>
	<span>
		<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
			<rect width="100" height="20" />
			<rect y="30" width="100" height="20" />
			<rect y="60" width="100" height="20" />
		</svg>
	</span>
</button>
