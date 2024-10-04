import PokemonList from "@/components/PokemonList";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import AllProviders from "../AllProviders";
import { server } from "../server";
import { delay, http, HttpResponse } from "msw";
import { createPokemonListQueryResponse } from "../gen/mocks/pokemonMocks/createPokemonList";


describe('PokemonList', () => {

  beforeAll(() => {
    createPokemonListQueryResponse();
  })

  const renderComponent = () => {
    return render(<PokemonList />, { wrapper: AllProviders });
  };
  
  it('should render correctly when loading', () => {
    renderComponent();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render correctly when loaded', async () => {
    server.use(
      http.get("/api/v2/pokemon", async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );
    
    renderComponent();

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    screen.debug();
  });

  it("should remove the loading indicator after data is fetched", async () => {
    renderComponent();

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const items = await screen.findAllByRole("article");
    expect(items.length).toBeGreaterThan;
  });
});