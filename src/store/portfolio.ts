import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Portfolio } from '@/types/portfolio';

interface PortfolioStore {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updatePortfolio: (id: string, portfolio: Partial<Portfolio>) => void;
  deletePortfolio: (id: string) => void;
  getPortfolioById: (id: string) => Portfolio | undefined;
  getAllPortfolios: () => Portfolio[];
  clearPortfolios: () => void;
}

const usePortfolioStore = create<PortfolioStore>()(
  persist(
    (set, get) => ({
      portfolios: [],
      
      addPortfolio: (portfolioData) => {
        const newPortfolio: Portfolio = {
          ...portfolioData,
          id: Date.now().toString(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        set((state) => ({
          portfolios: [...state.portfolios, newPortfolio],
        }));
      },
      
      updatePortfolio: (id, portfolioData) => {
        set((state) => ({
          portfolios: state.portfolios.map((portfolio) =>
            portfolio.id === id
              ? { ...portfolio, ...portfolioData, updatedAt: new Date() }
              : portfolio
          ),
        }));
      },
      
      deletePortfolio: (id) => {
        set((state) => ({
          portfolios: state.portfolios.filter((portfolio) => portfolio.id !== id),
        }));
      },
      
      getPortfolioById: (id) => {
        return get().portfolios.find((portfolio) => portfolio.id === id);
      },
      
      getAllPortfolios: () => {
        return get().portfolios;
      },
      
      clearPortfolios: () => {
        set({ portfolios: [] });
      },
    }),
    {
      name: 'portfolio-storage',
    }
  )
);

export default usePortfolioStore;