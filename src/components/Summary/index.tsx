import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 19.000,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 15.000,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 4.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
