import { Optional } from '../../lib';
import { Championship } from '../championships';

import { PredictionDocument } from './predictionDocument';

export interface Prediction extends Omit<PredictionDocument, 'championship'> {
  readonly id: string;
  readonly championship: Optional<Championship, 'name'>;
}
