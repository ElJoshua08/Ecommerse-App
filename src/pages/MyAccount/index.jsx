import CardSkeleton from '@/components/CardSkeleton'

const MyAccount = () => {
  return (
    <>
      <CardSkeleton />
      <h1>My Account</h1>
      <main class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
        <div class="mx-auto w-full max-w-5xl px-4 py-24 md:px-6">
          <div class="text-center">
            <div
              x-data="{}"
              x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
              class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul
                x-ref="logos"
                class="animate-infinite-scroll flex items-center justify-center bg-red-500 md:justify-start"
              >
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
                <li>
                  <h1>some text</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export { MyAccount }
