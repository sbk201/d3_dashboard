import * as d3 from "d3";
import data_ from '../data';
import "./sunburst.css";
const data2={
  "name": "flare",
  "children": [
    {
      "name": "analytics",
      "children": [
        {
          "name": "cluster",
          "children": [
            {
              "name": "AgglomerativeCluster",
              "size": 3938
            },
            {
              "name": "CommunityStructure",
              "size": 3812
            },
            {
              "name": "HierarchicalCluster",
              "size": 6714
            },
            {
              "name": "MergeEdge",
              "size": 743
            }
          ]
        },
        {
          "name": "graph",
          "children": [
            {
              "name": "BetweennessCentrality",
              "size": 3534
            },
            {
              "name": "LinkDistance",
              "size": 5731
            },
            {
              "name": "MaxFlowMinCut",
              "size": 7840
            },
            {
              "name": "ShortestPaths",
              "size": 5914
            },
            {
              "name": "SpanningTree",
              "size": 3416
            }
          ]
        },
        {
          "name": "optimization",
          "children": [
            {
              "name": "AspectRatioBanker",
              "size": 7074
            }
          ]
        }
      ]
    },
    {
      "name": "animate",
      "children": [
        {
          "name": "Easing",
          "size": 17010
        },
        {
          "name": "FunctionSequence",
          "size": 5842
        },
        {
          "name": "interpolate",
          "children": [
            {
              "name": "ArrayInterpolator",
              "size": 1983
            },
            {
              "name": "ColorInterpolator",
              "size": 2047
            },
            {
              "name": "DateInterpolator",
              "size": 1375
            },
            {
              "name": "Interpolator",
              "size": 8746
            },
            {
              "name": "MatrixInterpolator",
              "size": 2202
            },
            {
              "name": "NumberInterpolator",
              "size": 1382
            },
            {
              "name": "ObjectInterpolator",
              "size": 1629
            },
            {
              "name": "PointInterpolator",
              "size": 1675
            },
            {
              "name": "RectangleInterpolator",
              "size": 2042
            }
          ]
        },
        {
          "name": "ISchedulable",
          "size": 1041
        },
        {
          "name": "Parallel",
          "size": 5176
        },
        {
          "name": "Pause",
          "size": 449
        },
        {
          "name": "Scheduler",
          "size": 5593
        },
        {
          "name": "Sequence",
          "size": 5534
        },
        {
          "name": "Transition",
          "size": 9201
        },
        {
          "name": "Transitioner",
          "size": 19975
        },
        {
          "name": "TransitionEvent",
          "size": 1116
        },
        {
          "name": "Tween",
          "size": 6006
        }
      ]
    },
    {
      "name": "data",
      "children": [
        {
          "name": "converters",
          "children": [
            {
              "name": "Converters",
              "size": 721
            },
            {
              "name": "DelimitedTextConverter",
              "size": 4294
            },
            {
              "name": "GraphMLConverter",
              "size": 9800
            },
            {
              "name": "IDataConverter",
              "size": 1314
            },
            {
              "name": "JSONConverter",
              "size": 2220
            }
          ]
        },
        {
          "name": "DataField",
          "size": 1759
        },
        {
          "name": "DataSchema",
          "size": 2165
        },
        {
          "name": "DataSet",
          "size": 586
        },
        {
          "name": "DataSource",
          "size": 3331
        },
        {
          "name": "DataTable",
          "size": 772
        },
        {
          "name": "DataUtil",
          "size": 3322
        }
      ]
    },
    {
      "name": "display",
      "children": [
        {
          "name": "DirtySprite",
          "size": 8833
        },
        {
          "name": "LineSprite",
          "size": 1732
        },
        {
          "name": "RectSprite",
          "size": 3623
        },
        {
          "name": "TextSprite",
          "size": 10066
        }
      ]
    },
    {
      "name": "flex",
      "children": [
        {
          "name": "FlareVis",
          "size": 4116
        }
      ]
    },
    {
      "name": "physics",
      "children": [
        {
          "name": "DragForce",
          "size": 1082
        },
        {
          "name": "GravityForce",
          "size": 1336
        },
        {
          "name": "IForce",
          "size": 319
        },
        {
          "name": "NBodyForce",
          "size": 10498
        },
        {
          "name": "Particle",
          "size": 2822
        },
        {
          "name": "Simulation",
          "size": 9983
        },
        {
          "name": "Spring",
          "size": 2213
        },
        {
          "name": "SpringForce",
          "size": 1681
        }
      ]
    },
    {
      "name": "query",
      "children": [
        {
          "name": "AggregateExpression",
          "size": 1616
        },
        {
          "name": "And",
          "size": 1027
        },
        {
          "name": "Arithmetic",
          "size": 3891
        },
        {
          "name": "Average",
          "size": 891
        },
        {
          "name": "BinaryExpression",
          "size": 2893
        },
        {
          "name": "Comparison",
          "size": 5103
        },
        {
          "name": "CompositeExpression",
          "size": 3677
        },
        {
          "name": "Count",
          "size": 781
        },
        {
          "name": "DateUtil",
          "size": 4141
        },
        {
          "name": "Distinct",
          "size": 933
        },
        {
          "name": "Expression",
          "size": 5130
        },
        {
          "name": "ExpressionIterator",
          "size": 3617
        },
        {
          "name": "Fn",
          "size": 3240
        },
        {
          "name": "If",
          "size": 2732
        },
        {
          "name": "IsA",
          "size": 2039
        },
        {
          "name": "Literal",
          "size": 1214
        },
        {
          "name": "Match",
          "size": 3748
        },
        {
          "name": "Maximum",
          "size": 843
        },
        {
          "name": "methods",
          "children": [
            {
              "name": "add",
              "size": 593
            },
            {
              "name": "and",
              "size": 330
            },
            {
              "name": "average",
              "size": 287
            },
            {
              "name": "count",
              "size": 277
            },
            {
              "name": "distinct",
              "size": 292
            },
            {
              "name": "div",
              "size": 595
            },
            {
              "name": "eq",
              "size": 594
            },
            {
              "name": "fn",
              "size": 460
            },
            {
              "name": "gt",
              "size": 603
            },
            {
              "name": "gte",
              "size": 625
            },
            {
              "name": "iff",
              "size": 748
            },
            {
              "name": "isa",
              "size": 461
            },
            {
              "name": "lt",
              "size": 597
            },
            {
              "name": "lte",
              "size": 619
            },
            {
              "name": "max",
              "size": 283
            },
            {
              "name": "min",
              "size": 283
            },
            {
              "name": "mod",
              "size": 591
            },
            {
              "name": "mul",
              "size": 603
            },
            {
              "name": "neq",
              "size": 599
            },
            {
              "name": "not",
              "size": 386
            },
            {
              "name": "or",
              "size": 323
            },
            {
              "name": "orderby",
              "size": 307
            },
            {
              "name": "range",
              "size": 772
            },
            {
              "name": "select",
              "size": 296
            },
            {
              "name": "stddev",
              "size": 363
            },
            {
              "name": "sub",
              "size": 600
            },
            {
              "name": "sum",
              "size": 280
            },
            {
              "name": "update",
              "size": 307
            },
            {
              "name": "variance",
              "size": 335
            },
            {
              "name": "where",
              "size": 299
            },
            {
              "name": "xor",
              "size": 354
            },
            {
              "name": "_",
              "size": 264
            }
          ]
        },
        {
          "name": "Minimum",
          "size": 843
        },
        {
          "name": "Not",
          "size": 1554
        },
        {
          "name": "Or",
          "size": 970
        },
        {
          "name": "Query",
          "size": 13896
        },
        {
          "name": "Range",
          "size": 1594
        },
        {
          "name": "StringUtil",
          "size": 4130
        },
        {
          "name": "Sum",
          "size": 791
        },
        {
          "name": "Variable",
          "size": 1124
        },
        {
          "name": "Variance",
          "size": 1876
        },
        {
          "name": "Xor",
          "size": 1101
        }
      ]
    },
    {
      "name": "scale",
      "children": [
        {
          "name": "IScaleMap",
          "size": 2105
        },
        {
          "name": "LinearScale",
          "size": 1316
        },
        {
          "name": "LogScale",
          "size": 3151
        },
        {
          "name": "OrdinalScale",
          "size": 3770
        },
        {
          "name": "QuantileScale",
          "size": 2435
        },
        {
          "name": "QuantitativeScale",
          "size": 4839
        },
        {
          "name": "RootScale",
          "size": 1756
        },
        {
          "name": "Scale",
          "size": 4268
        },
        {
          "name": "ScaleType",
          "size": 1821
        },
        {
          "name": "TimeScale",
          "size": 5833
        }
      ]
    },
    {
      "name": "util",
      "children": [
        {
          "name": "Arrays",
          "size": 8258
        },
        {
          "name": "Colors",
          "size": 10001
        },
        {
          "name": "Dates",
          "size": 8217
        },
        {
          "name": "Displays",
          "size": 12555
        },
        {
          "name": "Filter",
          "size": 2324
        },
        {
          "name": "Geometry",
          "size": 10993
        },
        {
          "name": "heap",
          "children": [
            {
              "name": "FibonacciHeap",
              "size": 9354
            },
            {
              "name": "HeapNode",
              "size": 1233
            }
          ]
        },
        {
          "name": "IEvaluable",
          "size": 335
        },
        {
          "name": "IPredicate",
          "size": 383
        },
        {
          "name": "IValueProxy",
          "size": 874
        },
        {
          "name": "math",
          "children": [
            {
              "name": "DenseMatrix",
              "size": 3165
            },
            {
              "name": "IMatrix",
              "size": 2815
            },
            {
              "name": "SparseMatrix",
              "size": 3366
            }
          ]
        },
        {
          "name": "Maths",
          "size": 17705
        },
        {
          "name": "Orientation",
          "size": 1486
        },
        {
          "name": "palette",
          "children": [
            {
              "name": "ColorPalette",
              "size": 6367
            },
            {
              "name": "Palette",
              "size": 1229
            },
            {
              "name": "ShapePalette",
              "size": 2059
            },
            {
              "name": "SizePalette",
              "size": 2291
            }
          ]
        },
        {
          "name": "Property",
          "size": 5559
        },
        {
          "name": "Shapes",
          "size": 19118
        },
        {
          "name": "Sort",
          "size": 6887
        },
        {
          "name": "Stats",
          "size": 6557
        },
        {
          "name": "Strings",
          "size": 22026
        }
      ]
    },
    {
      "name": "vis",
      "children": [
        {
          "name": "axis",
          "children": [
            {
              "name": "Axes",
              "size": 1302
            },
            {
              "name": "Axis",
              "size": 24593
            },
            {
              "name": "AxisGridLine",
              "size": 652
            },
            {
              "name": "AxisLabel",
              "size": 636
            },
            {
              "name": "CartesianAxes",
              "size": 6703
            }
          ]
        },
        {
          "name": "controls",
          "children": [
            {
              "name": "AnchorControl",
              "size": 2138
            },
            {
              "name": "ClickControl",
              "size": 3824
            },
            {
              "name": "Control",
              "size": 1353
            },
            {
              "name": "ControlList",
              "size": 4665
            },
            {
              "name": "DragControl",
              "size": 2649
            },
            {
              "name": "ExpandControl",
              "size": 2832
            },
            {
              "name": "HoverControl",
              "size": 4896
            },
            {
              "name": "IControl",
              "size": 763
            },
            {
              "name": "PanZoomControl",
              "size": 5222
            },
            {
              "name": "SelectionControl",
              "size": 7862
            },
            {
              "name": "TooltipControl",
              "size": 8435
            }
          ]
        },
        {
          "name": "data",
          "children": [
            {
              "name": "Data",
              "size": 20544
            },
            {
              "name": "DataList",
              "size": 19788
            },
            {
              "name": "DataSprite",
              "size": 10349
            },
            {
              "name": "EdgeSprite",
              "size": 3301
            },
            {
              "name": "NodeSprite",
              "size": 19382
            },
            {
              "name": "render",
              "children": [
                {
                  "name": "ArrowType",
                  "size": 698
                },
                {
                  "name": "EdgeRenderer",
                  "size": 5569
                },
                {
                  "name": "IRenderer",
                  "size": 353
                },
                {
                  "name": "ShapeRenderer",
                  "size": 2247
                }
              ]
            },
            {
              "name": "ScaleBinding",
              "size": 11275
            },
            {
              "name": "Tree",
              "size": 7147
            },
            {
              "name": "TreeBuilder",
              "size": 9930
            }
          ]
        },
        {
          "name": "events",
          "children": [
            {
              "name": "DataEvent",
              "size": 2313
            },
            {
              "name": "SelectionEvent",
              "size": 1880
            },
            {
              "name": "TooltipEvent",
              "size": 1701
            },
            {
              "name": "VisualizationEvent",
              "size": 1117
            }
          ]
        },
        {
          "name": "legend",
          "children": [
            {
              "name": "Legend",
              "size": 20859
            },
            {
              "name": "LegendItem",
              "size": 4614
            },
            {
              "name": "LegendRange",
              "size": 10530
            }
          ]
        },
        {
          "name": "operator",
          "children": [
            {
              "name": "distortion",
              "children": [
                {
                  "name": "BifocalDistortion",
                  "size": 4461
                },
                {
                  "name": "Distortion",
                  "size": 6314
                },
                {
                  "name": "FisheyeDistortion",
                  "size": 3444
                }
              ]
            },
            {
              "name": "encoder",
              "children": [
                {
                  "name": "ColorEncoder",
                  "size": 3179
                },
                {
                  "name": "Encoder",
                  "size": 4060
                },
                {
                  "name": "PropertyEncoder",
                  "size": 4138
                },
                {
                  "name": "ShapeEncoder",
                  "size": 1690
                },
                {
                  "name": "SizeEncoder",
                  "size": 1830
                }
              ]
            },
            {
              "name": "filter",
              "children": [
                {
                  "name": "FisheyeTreeFilter",
                  "size": 5219
                },
                {
                  "name": "GraphDistanceFilter",
                  "size": 3165
                },
                {
                  "name": "VisibilityFilter",
                  "size": 3509
                }
              ]
            },
            {
              "name": "IOperator",
              "size": 1286
            },
            {
              "name": "label",
              "children": [
                {
                  "name": "Labeler",
                  "size": 9956
                },
                {
                  "name": "RadialLabeler",
                  "size": 3899
                },
                {
                  "name": "StackedAreaLabeler",
                  "size": 3202
                }
              ]
            },
            {
              "name": "layout",
              "children": [
                {
                  "name": "AxisLayout",
                  "size": 6725
                },
                {
                  "name": "BundledEdgeRouter",
                  "size": 3727
                },
                {
                  "name": "CircleLayout",
                  "size": 9317
                },
                {
                  "name": "CirclePackingLayout",
                  "size": 12003
                },
                {
                  "name": "DendrogramLayout",
                  "size": 4853
                },
                {
                  "name": "ForceDirectedLayout",
                  "size": 8411
                },
                {
                  "name": "IcicleTreeLayout",
                  "size": 4864
                },
                {
                  "name": "IndentedTreeLayout",
                  "size": 3174
                },
                {
                  "name": "Layout",
                  "size": 7881
                },
                {
                  "name": "NodeLinkTreeLayout",
                  "size": 12870
                },
                {
                  "name": "PieLayout",
                  "size": 2728
                },
                {
                  "name": "RadialTreeLayout",
                  "size": 12348
                },
                {
                  "name": "RandomLayout",
                  "size": 870
                },
                {
                  "name": "StackedAreaLayout",
                  "size": 9121
                },
                {
                  "name": "TreeMapLayout",
                  "size": 9191
                }
              ]
            },
            {
              "name": "Operator",
              "size": 2490
            },
            {
              "name": "OperatorList",
              "size": 5248
            },
            {
              "name": "OperatorSequence",
              "size": 4190
            },
            {
              "name": "OperatorSwitch",
              "size": 2581
            },
            {
              "name": "SortOperator",
              "size": 2023
            }
          ]
        },
        {
          "name": "Visualization",
          "size": 16540
        }
      ]
    }
  ]
};
const data3=[{"idx": "Bible", "grpsize": 0, "name": "Bible", "size": 0, "parent": ""}, {"idx": "OT", "grpsize": 0, "name": "OT", "size": 0, "parent": "Bible"}, {"idx": "NT", "grpsize": 0, "name": "NT", "size": 0, "parent": "Bible"}, {"idx": "OTPent", "grpsize": 0, "name": "Pent", "size": 0, "parent": "OT"}, {"parent": "OTPent", "grpsize": 50, "verse_counts": [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26], "idx": "book_Gen", "size": 1, "name": "Gen"}, {"parent": "OTPent", "grpsize": 40, "verse_counts": [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38], "idx": "book_Exo", "size": 1, "name": "Exo"}, {"parent": "OTPent", "grpsize": 27, "verse_counts": [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34], "idx": "book_Lev", "size": 1, "name": "Lev"}, {"parent": "OTPent", "grpsize": 36, "verse_counts": [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13], "idx": "book_Num", "size": 1, "name": "Num"}, {"parent": "OTPent", "grpsize": 34, "verse_counts": [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12], "idx": "book_Deu", "size": 1, "name": "Deu"}, {"idx": "OTHist", "grpsize": 0, "name": "Hist", "size": 0, "parent": "OT"}, {"parent": "OTHist", "grpsize": 24, "verse_counts": [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33], "idx": "book_Jos", "size": 1, "name": "Jos"}, {"parent": "OTHist", "grpsize": 21, "verse_counts": [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25], "idx": "book_Jdg", "size": 1, "name": "Jdg"}, {"parent": "OTHist", "grpsize": 4, "verse_counts": [22, 23, 18, 22], "idx": "book_Rut", "size": 1, "name": "Rut"}, {"parent": "OTHist", "grpsize": 31, "verse_counts": [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13], "idx": "book_1Sa", "size": 1, "name": "1Sa"}, {"parent": "OTHist", "grpsize": 24, "verse_counts": [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25], "idx": "book_2Sa", "size": 1, "name": "2Sa"}, {"parent": "OTHist", "grpsize": 22, "verse_counts": [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53], "idx": "book_1Ki", "size": 1, "name": "1Ki"}, {"parent": "OTHist", "grpsize": 25, "verse_counts": [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30], "idx": "book_2Ki", "size": 1, "name": "2Ki"}, {"parent": "OTHist", "grpsize": 29, "verse_counts": [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30], "idx": "book_1Ch", "size": 1, "name": "1Ch"}, {"parent": "OTHist", "grpsize": 36, "verse_counts": [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23], "idx": "book_2Ch", "size": 1, "name": "2Ch"}, {"parent": "OTHist", "grpsize": 10, "verse_counts": [11, 70, 13, 24, 17, 22, 28, 36, 15, 44], "idx": "book_Ezr", "size": 1, "name": "Ezr"}, {"parent": "OTHist", "grpsize": 13, "verse_counts": [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31], "idx": "book_Neh", "size": 1, "name": "Neh"}, {"parent": "OTHist", "grpsize": 10, "verse_counts": [22, 23, 15, 17, 14, 14, 10, 17, 32, 3], "idx": "book_Est", "size": 1, "name": "Est"}, {"idx": "OTPoet", "grpsize": 0, "name": "Poet", "size": 0, "parent": "OT"}, {"parent": "OTPoet", "grpsize": 42, "verse_counts": [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17], "idx": "book_Job", "size": 1, "name": "Job"}, {"parent": "OTPoet", "grpsize": 150, "verse_counts": [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6], "idx": "book_Psa", "size": 1, "name": "Psa"}, {"parent": "OTPoet", "grpsize": 31, "verse_counts": [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31], "idx": "book_Prv", "size": 1, "name": "Prv"}, {"parent": "OTPoet", "grpsize": 12, "verse_counts": [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14], "idx": "book_Ecc", "size": 1, "name": "Ecc"}, {"parent": "OTPoet", "grpsize": 8, "verse_counts": [17, 17, 11, 16, 16, 13, 13, 14], "idx": "book_Song", "size": 1, "name": "Song"}, {"idx": "OTMajor", "grpsize": 0, "name": "Major", "size": 0, "parent": "OT"}, {"parent": "OTMajor", "grpsize": 66, "verse_counts": [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24], "idx": "book_Isa", "size": 1, "name": "Isa"}, {"parent": "OTMajor", "grpsize": 52, "verse_counts": [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34], "idx": "book_Jer", "size": 1, "name": "Jer"}, {"parent": "OTMajor", "grpsize": 5, "verse_counts": [22, 22, 66, 22, 22], "idx": "book_Lam", "size": 1, "name": "Lam"}, {"parent": "OTMajor", "grpsize": 48, "verse_counts": [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35], "idx": "book_Eze", "size": 1, "name": "Eze"}, {"parent": "OTMajor", "grpsize": 12, "verse_counts": [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13], "idx": "book_Dan", "size": 1, "name": "Dan"}, {"idx": "OTMinor", "grpsize": 0, "name": "Minor", "size": 0, "parent": "OT"}, {"parent": "OTMinor", "grpsize": 14, "verse_counts": [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9], "idx": "book_Hos", "size": 1, "name": "Hos"}, {"parent": "OTMinor", "grpsize": 3, "verse_counts": [20, 32, 21], "idx": "book_Joe", "size": 1, "name": "Joe"}, {"parent": "OTMinor", "grpsize": 9, "verse_counts": [15, 16, 15, 13, 27, 14, 17, 14, 15], "idx": "book_Amo", "size": 1, "name": "Amo"}, {"parent": "OTMinor", "grpsize": 1, "verse_counts": [21], "idx": "book_Oba", "size": 1, "name": "Oba"}, {"parent": "OTMinor", "grpsize": 4, "verse_counts": [17, 10, 10, 11], "idx": "book_Jon", "size": 1, "name": "Jon"}, {"parent": "OTMinor", "grpsize": 7, "verse_counts": [16, 13, 12, 13, 15, 16, 20], "idx": "book_Mic", "size": 1, "name": "Mic"}, {"parent": "OTMinor", "grpsize": 3, "verse_counts": [15, 13, 19], "idx": "book_Nah", "size": 1, "name": "Nah"}, {"parent": "OTMinor", "grpsize": 3, "verse_counts": [17, 20, 19], "idx": "book_Hab", "size": 1, "name": "Hab"}, {"parent": "OTMinor", "grpsize": 3, "verse_counts": [18, 15, 20], "idx": "book_Zep", "size": 1, "name": "Zep"}, {"parent": "OTMinor", "grpsize": 2, "verse_counts": [15, 23], "idx": "book_Hag", "size": 1, "name": "Hag"}, {"parent": "OTMinor", "grpsize": 14, "verse_counts": [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21], "idx": "book_Zec", "size": 1, "name": "Zec"}, {"parent": "OTMinor", "grpsize": 4, "verse_counts": [14, 17, 18, 6], "idx": "book_Mal", "size": 1, "name": "Mal"}, {"idx": "NTGosp", "grpsize": 0, "name": "Gosp", "size": 0, "parent": "NT"}, {"parent": "NTGosp", "grpsize": 28, "verse_counts": [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20], "idx": "book_Mat", "size": 1, "name": "Mat"}, {"parent": "NTGosp", "grpsize": 16, "verse_counts": [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20], "idx": "book_Mar", "size": 1, "name": "Mar"}, {"parent": "NTGosp", "grpsize": 24, "verse_counts": [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53], "idx": "book_Luk", "size": 1, "name": "Luk"}, {"parent": "NTGosp", "grpsize": 21, "verse_counts": [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25], "idx": "book_Joh", "size": 1, "name": "Joh"}, {"idx": "NTHist", "grpsize": 0, "name": "Hist", "size": 0, "parent": "NT"}, {"parent": "NTHist", "grpsize": 28, "verse_counts": [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31], "idx": "book_Act", "size": 1, "name": "Act"}, {"idx": "NTPaul", "grpsize": 0, "name": "Paul", "size": 0, "parent": "NT"}, {"parent": "NTPaul", "grpsize": 16, "verse_counts": [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27], "idx": "book_Rom", "size": 1, "name": "Rom"}, {"parent": "NTPaul", "grpsize": 16, "verse_counts": [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24], "idx": "book_1Co", "size": 1, "name": "1Co"}, {"parent": "NTPaul", "grpsize": 13, "verse_counts": [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14], "idx": "book_2Co", "size": 1, "name": "2Co"}, {"parent": "NTPaul", "grpsize": 6, "verse_counts": [24, 21, 29, 31, 26, 18], "idx": "book_Gal", "size": 1, "name": "Gal"}, {"parent": "NTPaul", "grpsize": 6, "verse_counts": [23, 22, 21, 32, 33, 24], "idx": "book_Eph", "size": 1, "name": "Eph"}, {"parent": "NTPaul", "grpsize": 4, "verse_counts": [30, 30, 21, 23], "idx": "book_Phi", "size": 1, "name": "Phi"}, {"parent": "NTPaul", "grpsize": 4, "verse_counts": [29, 23, 25, 18], "idx": "book_Col", "size": 1, "name": "Col"}, {"parent": "NTPaul", "grpsize": 5, "verse_counts": [10, 20, 13, 18, 28], "idx": "book_1Th", "size": 1, "name": "1Th"}, {"parent": "NTPaul", "grpsize": 3, "verse_counts": [12, 17, 18], "idx": "book_2Th", "size": 1, "name": "2Th"}, {"parent": "NTPaul", "grpsize": 6, "verse_counts": [20, 15, 16, 16, 25, 21], "idx": "book_1Ti", "size": 1, "name": "1Ti"}, {"parent": "NTPaul", "grpsize": 4, "verse_counts": [18, 26, 17, 22], "idx": "book_2Ti", "size": 1, "name": "2Ti"}, {"parent": "NTPaul", "grpsize": 3, "verse_counts": [16, 15, 15], "idx": "book_Tit", "size": 1, "name": "Tit"}, {"parent": "NTPaul", "grpsize": 1, "verse_counts": [25], "idx": "book_Phm", "size": 1, "name": "Phm"}, {"idx": "NTEpistle", "grpsize": 0, "name": "Epistle", "size": 0, "parent": "NT"}, {"parent": "NTEpistle", "grpsize": 13, "verse_counts": [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25], "idx": "book_Heb", "size": 1, "name": "Heb"}, {"parent": "NTEpistle", "grpsize": 5, "verse_counts": [27, 26, 18, 17, 20], "idx": "book_Jam", "size": 1, "name": "Jam"}, {"parent": "NTEpistle", "grpsize": 5, "verse_counts": [25, 25, 22, 19, 14], "idx": "book_1Pe", "size": 1, "name": "1Pe"}, {"parent": "NTEpistle", "grpsize": 3, "verse_counts": [21, 22, 18], "idx": "book_2Pe", "size": 1, "name": "2Pe"}, {"parent": "NTEpistle", "grpsize": 5, "verse_counts": [10, 29, 24, 21, 21], "idx": "book_1Jo", "size": 1, "name": "1Jo"}, {"parent": "NTEpistle", "grpsize": 1, "verse_counts": [13], "idx": "book_2Jo", "size": 1, "name": "2Jo"}, {"parent": "NTEpistle", "grpsize": 1, "verse_counts": [14], "idx": "book_3Jo", "size": 1, "name": "3Jo"}, {"parent": "NTEpistle", "grpsize": 1, "verse_counts": [25], "idx": "book_Jud", "size": 1, "name": "Jud"}, {"idx": "NTApoc", "grpsize": 0, "name": "Apoc", "size": 0, "parent": "NT"}, {"parent": "NTApoc", "grpsize": 22, "verse_counts": [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21], "idx": "book_Rev", "size": 1, "name": "Rev"}];
$(function () {
  // Thanks http://bl.ocks.org/metmajer/5480307!!!
  var root, node, tab_structure;
  d3.json("/bible_structure.json", function (error, bvsa) {
    if (error) {
      return console.error(error);
    } else {
      console.log(bvsa)
      // tab_structure = bvsa;
      // root = d3.stratify().id(function (d) { return d.idx; }).parentId(function (d) { return d.parent; })(bvsa);
      // update();
    }

  });
  // Global Variables
  var gWidth = $('#gameboard').width(),   // Width of the svg palette
    gHeight = $('#gameboard').height(),   // Height of the svg palette
    radius = (Math.min(gWidth, gHeight) / 2) - 10,
    mode = $('.mode:checked').val(), // linear or grouped, based on radiobuttons
    svg = d3.select("svg").append("g").attr("id", "bigG").attr("transform", "translate(" + gWidth / 2 + "," + (gHeight / 2) + ")"),
    color_palettes = [['#4abdac', '#fc4a1a', '#f7b733'], ['#f03b20', '#feb24c', '#ffeda0'], ['#007849', '#0375b4', '#ffce00'], ['#373737', '#dcd0c0', '#c0b283'], ['#e37222', '#07889b', '#eeaa7b'], ['#062f4f', '#813772', '#b82601'], ['#565656', '#76323f', '#c09f80']];


  var x = d3.scaleLinear().range([0, 2 * Math.PI]),
    y = d3.scaleLinear().range([0, radius]), //scaleSqrt
    color = d3.scaleLinear().domain([0, 0.5, 1]).range(color_palettes[~~(Math.random() * 6)]),
    partition = d3.partition();

  // Calculate the d path for each slice.
  var arc = d3.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x0))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x1))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y0)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y1)); });


  // Build the sunburst.
  var first_build = true;


  tab_structure = data3;
  root = d3.stratify().id(function (d) { return d.idx; }).parentId(function (d) { return d.parent; })(data3);
  update();
  function update() {

    if (mode == "linear") {      // Determine how to size the slices.
      root.sum(function (d) { return d.size; });
    } else {
      root.sum(function (d) { return d.grpsize; });
    }

    if (first_build) {
      // Add a <path d="[shape]" style="fill: [color];"><title>[popup text]</title></path>
      //   to each <g> element; add click handler; save slice widths for tweening
      var gSlices = svg.selectAll("g").data(partition(root).descendants(), function (d) { return d.data.id; }).enter().append("g");
      gSlices.exit().remove();
      gSlices.append("path").style("fill", function (d) { return d.parent ? color(d.x0) : "white"; })
        .on("click", click)
        .append("title").text(function (d) { return d.data.name; });  // Return white for root.
      gSlices.append("text").attr("dy", ".35em").text(function (d) { return d.parent ? d.data.name : ""; }).attr("id", function (d) { return "w" + d.data.name; }); // TODO: was d.data.word
      svg.selectAll("path").append("title").text(function (d) { return d.data.word; })

      first_build = false;
    } else {
      svg.selectAll("path").data(partition(root).descendants());
    }


    svg.selectAll("path").transition("update").duration(750).attrTween("d", function (d, i) {
      return arcTweenPath(d, i);
    });
    svg.selectAll("text").transition("update").duration(750).attrTween("transform", function (d, i) { return arcTweenText(d, i); })
      .attr('text-anchor', function (d) { return d.textAngle > 180 ? "start" : "end"; })
      .attr("dx", function (d) { return d.textAngle > 180 ? -13 : 13; })
      .attr("opacity", function (e) { return e.x1 - e.x0 > 0.01 ? 1 : 0; });
  }


  // Respond to radio click.
  $('.mode').on("change", function change() {
    mode = $('.mode:checked').val();
    update();
  });


  // Respond to slice click.
  function click(d) {
    node = d;

    svg.selectAll("path").transition("click").duration(750).attrTween("d", function (d, i) { return arcTweenPath(d, i); });
    svg.selectAll("text").transition("click").duration(750).attrTween("transform", function (d, i) { return arcTweenText(d, i); })
      .attr('text-anchor', function (d) { return d.textAngle > 180 ? "start" : "end"; })
      .attr("dx", function (d) { return d.textAngle > 180 ? -13 : 13; })
      .attr("opacity", function (e) {
        if (e.x0 >= d.x0 && e.x1 <= d.x1) {
          return (e.x1 - e.x0 > 0.01 ? 1 : 0);
        } else {
          return 0;
        }
      })
   }


  // When switching data: interpolate the arcs in data space.
  //$("#w1Jo").attr("transform").substring(10,$("#w1Jo").attr("transform").search(",")) 
  function arcTweenText(a, i) {

    var oi = d3.interpolate({ x0: (a.x0s ? a.x0s : 0), x1: (a.x1s ? a.x1s : 0), y0: (a.y0s ? a.y0s : 0), y1: (a.y1s ? a.y1s : 0) }, a);
    function tween(t) {
      var b = oi(t);
      var ang = ((x((b.x0 + b.x1) / 2) - Math.PI / 2) / Math.PI * 180);
      b.textAngle = (ang > 90) ? 180 + ang : ang;
      a.centroid = arc.centroid(b);
      //b.opacity = (b.x1 - b.x0) > 0.01 ? 0 : 0;
      //console.log(b.data.name + " x1:" + b.x1 + " x0:" + b.x0);
      return "translate(" + arc.centroid(b) + ")rotate(" + b.textAngle + ")";
    }
    return tween;
  }

  // When switching data: interpolate the arcs in data space.
  function arcTweenPath(a, i) {
    // (a.x0s ? a.x0s : 0) -- grab the prev saved x0 or set to 0 (for 1st time through)
    // avoids the stash() and allows the sunburst to grow into being
    var oi = d3.interpolate({ x0: (a.x0s ? a.x0s : 0), x1: (a.x1s ? a.x1s : 0), y0: (a.y0s ? a.y0s : 0), y1: (a.y1s ? a.y1s : 0) }, a);
    function tween(t) {
      var b = oi(t);
      a.x0s = b.x0;
      a.x1s = b.x1;
      a.y0s = b.y0;
      a.y1s = b.y1;
      return arc(b);
    }
    if (i == 0 && node) {  // If we are on the first arc, adjust the x domain to match the root node at the current zoom level.
      var xd = d3.interpolate(x.domain(), [node.x0, node.x1]);
      var yd = d3.interpolate(y.domain(), [node.y0, 1]);
      var yr = d3.interpolate(y.range(), [node.y0 ? 40 : 0, radius]);

      return function (t) {
        x.domain(xd(t));
        y.domain(yd(t)).range(yr(t));
        return tween(t);
      };
    } else {
      return tween;
    }
  }
  
});