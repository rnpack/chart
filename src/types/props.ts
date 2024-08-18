import type { Attributes } from 'react';
import type { AccessibilityProps } from 'react-native';

interface TestProps {
  testID?: string;
}

interface BaseProps extends AccessibilityProps, TestProps, Attributes {}

type DonutChartVariant = 'circle' | 'semi-circle';

export type { BaseProps, DonutChartVariant };
