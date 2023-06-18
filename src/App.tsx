import type { WidgetConfig } from '@lifi/widget';
import { LiFiWidget } from '@lifi/widget';

export const widgetConfig: Partial<WidgetConfig> = {
  containerStyle: {
    width: '100%',
    borderRadius: '16px',
  },
};

export function App() {
  return <LiFiWidget config={widgetConfig} integrator="Thanaplus" />;
}
