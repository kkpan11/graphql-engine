import { Comparators } from '../../types';
import {
  BooleanType,
  FloatType,
  IntType,
  StringType,
  stringType,
} from './graphql';

export const comparators: Comparators = {
  number_SQLite: {
    operators: [
      {
        name: '_eq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
    ],
  },
  string_SQLite: {
    operators: [
      {
        name: '_eq',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: stringType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
    ],
  },
  String: {
    operators: [
      {
        name: '_eq',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_ilike',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_iregex',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_like',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_nilike',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_niregex',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_nlike',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_nregex',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_nsimilar',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_regex',
        graphqlType: StringType,
        type: 'comparision',
      },

      {
        name: '_similar',
        graphqlType: StringType,
        type: 'comparision',
      },
    ],
  },
  Int: {
    operators: [
      {
        name: '_eq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
    ],
  },
  String_BigQuery: {
    operators: [
      {
        name: '_eq',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_like',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: StringType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },

      {
        name: '_nlike',
        graphqlType: StringType,
        type: 'comparision',
      },
    ],
  },
  Float_BigQuery: {
    operators: [
      {
        name: '_eq',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: FloatType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
    ],
  },
  Boolean_BigQuery: {
    operators: [
      {
        name: '_eq',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: BooleanType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
    ],
  },
  Int_BigQuery: {
    operators: [
      {
        name: '_eq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_gt',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_gte',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_in',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_is_null',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_lt',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_lte',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_neq',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_nin',
        graphqlType: IntType,
        type: 'comparision',
      },
      {
        name: '_ceq',
        graphqlType: IntType,
        type: 'comparision',
      },
    ],
  },

  box: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'box' as any,
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'box',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'box',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[box!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'box',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'box',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'box',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[box!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  circle: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'circle',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'circle',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'circle',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[circle!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'circle',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'circle',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'circle',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[circle!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  float8: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'float8',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'float8',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'float8',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[float8!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'float8',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'float8',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'float8',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[float8!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  line: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'line',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'line',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'line',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[line!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'line',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'line',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'line',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[line!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  money: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'money',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'money',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'money',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[money!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'money',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'money',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'money',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[money!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  polygon: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'polygon',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'polygon',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'polygon',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[polygon!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'polygon',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'polygon',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'polygon',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[polygon!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  regdictionary: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'regdictionary',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'regdictionary',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'regdictionary',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[regdictionary!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'regdictionary',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'regdictionary',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'regdictionary',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[regdictionary!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  geography: {
    operators: [
      {
        type: '',
        name: 'cast',
        operator: '_cast',
        graphqlType: 'geography_cast_exp',
      },
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'geography',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'geography',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'geography',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[geography!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'geography',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'geography',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'geography',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[geography!]',
        inputStructure: 'array',
      },
      {
        type: 'geometric_geographic',
        name: '_st_d_within',
        operator: '_st_d_within',
        graphqlType: 'st_d_within_geography_input',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric_geographic',
        name: '_st_intersects',
        operator: '_st_intersects',
        graphqlType: 'geography',
        inputStructure: 'object',
        inputType: 'json',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  geometry: {
    operators: [
      {
        type: '',
        name: 'cast',
        operator: '_cast',
        graphqlType: 'geometry_cast_exp' as any,
      },
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[geometry!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[geometry!]',
        inputStructure: 'array',
      },
      {
        type: '',
        name: 'st 3 d d within',
        operator: '_st_3d_d_within',
        graphqlType: 'st_d_within_input',
      },
      {
        type: '',
        name: 'st 3 d intersects',
        operator: '_st_3d_intersects',
        graphqlType: 'geometry',
      },
      {
        type: 'geometric',
        name: '_st_contains',
        operator: '_st_contains',
        graphqlType: 'geometry',
        inputStructure: 'object',
      },
      {
        type: 'geometric',
        name: '_st_crosses',
        operator: '_st_crosses',
        graphqlType: 'geometry',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric_geographic',
        name: '_st_d_within',
        operator: '_st_d_within',
        graphqlType: 'st_d_within_input',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric',
        name: '_st_equals',
        operator: '_st_equals',
        graphqlType: 'geometry',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric_geographic',
        name: '_st_intersects',
        operator: '_st_intersects',
        graphqlType: 'geometry',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric',
        name: '_st_overlaps',
        operator: '_st_overlaps',
        graphqlType: 'geometry',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric',
        name: '_st_touches',
        operator: '_st_touches',
        graphqlType: 'geometry',
        inputStructure: 'object',
        inputType: 'json',
      },
      {
        type: 'geometric',
        name: '_st_within',
        operator: '_st_within',
        graphqlType: 'geometry',
        inputStructure: 'object',
        inputType: 'json',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  norm_addy_scalar: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'norm_addy_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'norm_addy_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'norm_addy_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[norm_addy_scalar!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'norm_addy_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'norm_addy_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'norm_addy_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[norm_addy_scalar!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  _int4: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: '_int4',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: '_int4',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: '_int4',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[_int4!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: '_int4',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: '_int4',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: '_int4',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[_int4!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  validatetopology_returntype_scalar: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'validatetopology_returntype_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'validatetopology_returntype_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'validatetopology_returntype_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[validatetopology_returntype_scalar!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'validatetopology_returntype_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'validatetopology_returntype_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'validatetopology_returntype_scalar',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[validatetopology_returntype_scalar!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
  name: {
    operators: [
      {
        type: 'comparision',
        name: '_eq',
        operator: '_eq',
        graphqlType: 'name',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gt',
        operator: '_gt',
        graphqlType: 'name',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_gte',
        operator: '_gte',
        graphqlType: 'name',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_in',
        operator: '_in',
        graphqlType: '[name!]',
        inputStructure: 'array',
      },
      {
        type: 'is_null',
        name: '_is_null',
        operator: '_is_null',
        graphqlType: 'Boolean',
        inputStructure: 'object',
        inputType: 'boolean',
      },
      {
        type: 'comparision',
        name: '_lt',
        operator: '_lt',
        graphqlType: 'name',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_lte',
        operator: '_lte',
        graphqlType: 'name',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_neq',
        operator: '_neq',
        graphqlType: 'name',
        inputStructure: 'object',
      },
      {
        type: 'comparision',
        name: '_nin',
        operator: '_nin',
        graphqlType: '[name!]',
        inputStructure: 'array',
      },
      { name: '_ceq', operator: '_ceq' },
      { name: '_cne', operator: '_cne' },
      { name: '_cgt', operator: '_cgt' },
      { name: '_clt', operator: '_clt' },
      { name: '_cgte', operator: '_cgte' },
      { name: '_clte', operator: '_clte' },
    ],
  },
};
