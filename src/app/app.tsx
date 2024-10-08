import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClusterProvider } from '../components/cluster/cluster-data-access'
import { SolanaProvider } from '../components/solana/solana-provider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Review from '@/components/Reviews'
import Footer from '@/components/Footer'

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <ClusterProvider>
        <SolanaProvider>
          <Header />
          <main className="flex flex-col gap-16 pt-20">
            <Hero />
            <div className="flex flex-col items-center gap-4">
              <p className="font-semibold">Trusted by 40+ companies</p>
              <img src="trustees.svg" alt="" />
            </div>

            <Features />
            {/* <Plans /> */}
            <FAQ />
            <Review />
          </main>
          <Footer />
        </SolanaProvider>
      </ClusterProvider>
    </QueryClientProvider>
  )
}
