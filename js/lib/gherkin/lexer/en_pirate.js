
/* line 1 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */
;(function() {


/* line 117 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */



/* line 11 "js/lib/gherkin/lexer/en_pirate.js" */
const _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 14, 1, 15, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 2, 2, 16, 2, 11, 0, 2, 
	12, 13, 2, 15, 0, 2, 15, 1, 
	2, 15, 14, 2, 15, 17, 2, 16, 
	4, 2, 16, 5, 2, 16, 6, 2, 
	16, 7, 2, 16, 8, 2, 16, 14, 
	2, 18, 19, 2, 20, 0, 2, 20, 
	1, 2, 20, 14, 2, 20, 17, 3, 
	3, 12, 13, 3, 9, 12, 13, 3, 
	10, 12, 13, 3, 11, 12, 13, 3, 
	12, 13, 16, 3, 15, 12, 13, 4, 
	2, 12, 13, 16, 4, 15, 0, 12, 
	13
];

const _lexer_key_offsets = [
	0, 0, 19, 37, 38, 39, 43, 48, 
	53, 58, 63, 67, 71, 73, 74, 75, 
	76, 77, 78, 79, 80, 81, 82, 83, 
	84, 85, 86, 87, 88, 89, 90, 92, 
	97, 104, 109, 112, 113, 114, 115, 116, 
	117, 118, 119, 120, 121, 122, 123, 124, 
	136, 138, 140, 142, 144, 146, 148, 150, 
	152, 154, 156, 158, 160, 162, 164, 166, 
	168, 170, 172, 174, 176, 178, 180, 182, 
	184, 186, 204, 205, 206, 207, 208, 209, 
	210, 211, 212, 213, 214, 215, 216, 217, 
	218, 219, 220, 221, 222, 223, 224, 225, 
	226, 227, 228, 229, 230, 231, 232, 233, 
	234, 241, 243, 245, 247, 249, 251, 253, 
	255, 257, 259, 261, 263, 264, 265, 266, 
	267, 268, 269, 270, 271, 272, 273, 274, 
	275, 276, 277, 278, 293, 295, 297, 299, 
	301, 303, 305, 307, 309, 311, 313, 315, 
	317, 319, 321, 323, 327, 329, 331, 333, 
	335, 337, 339, 341, 343, 345, 347, 349, 
	351, 353, 355, 357, 359, 361, 363, 365, 
	367, 369, 371, 373, 375, 377, 379, 381, 
	383, 385, 387, 389, 391, 393, 395, 397, 
	399, 401, 403, 405, 407, 409, 411, 413, 
	415, 417, 419, 421, 423, 425, 427, 429, 
	431, 433, 435, 437, 439, 441, 443, 445, 
	447, 449, 451, 453, 455, 457, 459, 461, 
	463, 464, 465, 466, 467, 468, 469, 470, 
	471, 472, 473, 474, 475, 476, 477, 478, 
	479, 480, 481, 482, 483, 484, 485, 486, 
	487, 488, 489, 490, 491, 492, 493, 494, 
	495, 496, 509, 511, 513, 515, 517, 519, 
	521, 523, 525, 527, 529, 531, 533, 535, 
	537, 539, 543, 545, 547, 549, 551, 553, 
	555, 557, 559, 561, 563, 565, 567, 569, 
	571, 573, 575, 577, 579, 581, 583, 585, 
	587, 589, 591, 593, 595, 597, 599, 601, 
	603, 605, 607, 609, 611, 613, 615, 617, 
	619, 621, 623, 625, 627, 629, 631, 633, 
	635, 636, 637, 638, 639, 640, 641, 642, 
	643, 644, 645, 659, 661, 663, 665, 667, 
	669, 671, 673, 675, 677, 679, 681, 683, 
	685, 687, 689, 693, 695, 697, 699, 701, 
	703, 705, 707, 709, 711, 713, 715, 717, 
	719, 721, 723, 725, 727, 729, 731, 733, 
	735, 737, 739, 741, 743, 745, 747, 749, 
	751, 753, 755, 757, 759, 761, 763, 765, 
	767, 769, 771, 773, 775, 777, 779, 781, 
	783, 785, 787, 789, 791, 793, 795, 797, 
	799, 801, 803, 805, 807, 809, 811, 813, 
	815, 817, 821, 827, 830, 832, 838, 856, 
	858, 860, 862, 864, 866, 868, 870, 872, 
	874, 876, 878, 880, 882, 884, 886, 888, 
	890, 892, 894, 896, 898, 900, 902, 904, 
	906, 908, 910, 912, 914, 916, 918, 920, 
	922, 924, 926, 928, 930, 932, 934, 936, 
	938, 940, 942, 944, 946, 948, 950, 952, 
	954, 955, 956, 957, 958, 959, 960
];

const _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 65, 
	66, 68, 71, 72, 76, 83, 89, 124, 
	239, 9, 13, 10, 32, 34, 35, 37, 
	42, 64, 65, 66, 68, 71, 72, 76, 
	83, 89, 124, 9, 13, 34, 34, 10, 
	32, 9, 13, 10, 32, 34, 9, 13, 
	10, 32, 34, 9, 13, 10, 32, 34, 
	9, 13, 10, 32, 34, 9, 13, 10, 
	32, 9, 13, 10, 32, 9, 13, 10, 
	13, 10, 95, 70, 69, 65, 84, 85, 
	82, 69, 95, 69, 78, 68, 95, 37, 
	32, 10, 10, 13, 13, 32, 64, 9, 
	10, 9, 10, 13, 32, 64, 11, 12, 
	10, 32, 64, 9, 13, 104, 118, 121, 
	111, 121, 32, 109, 97, 116, 101, 121, 
	33, 58, 10, 10, 10, 32, 35, 37, 
	64, 65, 68, 72, 83, 89, 9, 13, 
	10, 95, 10, 70, 10, 69, 10, 65, 
	10, 84, 10, 85, 10, 82, 10, 69, 
	10, 95, 10, 69, 10, 78, 10, 68, 
	10, 95, 10, 37, 10, 104, 10, 111, 
	10, 121, 10, 32, 10, 109, 10, 97, 
	10, 116, 10, 101, 10, 121, 10, 33, 
	10, 58, 10, 32, 34, 35, 37, 42, 
	64, 65, 66, 68, 71, 72, 76, 83, 
	89, 124, 9, 13, 108, 105, 109, 101, 
	121, 33, 101, 97, 100, 32, 109, 101, 
	110, 32, 116, 101, 108, 108, 32, 110, 
	111, 32, 116, 97, 108, 101, 115, 58, 
	10, 10, 10, 32, 35, 65, 124, 9, 
	13, 10, 104, 10, 111, 10, 121, 10, 
	32, 10, 109, 10, 97, 10, 116, 10, 
	101, 10, 121, 10, 33, 10, 58, 97, 
	110, 103, 119, 97, 101, 97, 118, 101, 
	32, 116, 111, 58, 10, 10, 10, 32, 
	35, 37, 42, 64, 65, 66, 71, 72, 
	76, 83, 89, 9, 13, 10, 95, 10, 
	70, 10, 69, 10, 65, 10, 84, 10, 
	85, 10, 82, 10, 69, 10, 95, 10, 
	69, 10, 78, 10, 68, 10, 95, 10, 
	37, 10, 32, 10, 104, 118, 121, 10, 
	111, 10, 121, 10, 32, 10, 109, 10, 
	97, 10, 116, 10, 101, 10, 121, 10, 
	33, 10, 58, 10, 97, 10, 115, 10, 
	116, 10, 33, 10, 101, 10, 108, 10, 
	105, 10, 109, 10, 101, 10, 121, 10, 
	97, 10, 110, 10, 103, 10, 119, 10, 
	97, 10, 101, 10, 97, 10, 118, 10, 
	101, 10, 32, 10, 116, 10, 111, 10, 
	101, 10, 116, 10, 32, 10, 103, 10, 
	111, 10, 32, 10, 97, 10, 110, 10, 
	100, 10, 32, 10, 104, 10, 97, 10, 
	117, 10, 108, 10, 104, 10, 105, 10, 
	118, 10, 101, 10, 114, 10, 32, 10, 
	109, 10, 101, 10, 32, 10, 116, 10, 
	105, 10, 109, 10, 98, 10, 101, 10, 
	114, 10, 115, 10, 111, 10, 45, 10, 
	104, 10, 111, 10, 45, 10, 104, 101, 
	116, 32, 103, 111, 32, 97, 110, 100, 
	32, 104, 97, 117, 108, 104, 105, 118, 
	101, 114, 32, 109, 101, 32, 116, 105, 
	109, 98, 101, 114, 115, 58, 10, 10, 
	10, 32, 35, 37, 42, 64, 65, 66, 
	71, 72, 76, 9, 13, 10, 95, 10, 
	70, 10, 69, 10, 65, 10, 84, 10, 
	85, 10, 82, 10, 69, 10, 95, 10, 
	69, 10, 78, 10, 68, 10, 95, 10, 
	37, 10, 32, 10, 104, 118, 121, 10, 
	111, 10, 121, 10, 32, 10, 109, 10, 
	97, 10, 116, 10, 101, 10, 121, 10, 
	33, 10, 58, 10, 97, 10, 115, 10, 
	116, 10, 33, 10, 101, 10, 108, 10, 
	105, 10, 109, 10, 101, 10, 121, 10, 
	97, 10, 110, 10, 103, 10, 119, 10, 
	97, 10, 101, 10, 97, 10, 118, 10, 
	101, 10, 32, 10, 116, 10, 111, 10, 
	101, 10, 116, 10, 32, 10, 103, 10, 
	111, 10, 32, 10, 97, 10, 110, 10, 
	100, 10, 32, 10, 104, 10, 97, 10, 
	117, 10, 108, 111, 45, 104, 111, 45, 
	104, 111, 58, 10, 10, 10, 32, 35, 
	37, 42, 64, 65, 66, 71, 72, 76, 
	83, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, 10, 
	32, 10, 104, 118, 121, 10, 111, 10, 
	121, 10, 32, 10, 109, 10, 97, 10, 
	116, 10, 101, 10, 121, 10, 33, 10, 
	58, 10, 97, 10, 115, 10, 116, 10, 
	33, 10, 101, 10, 108, 10, 105, 10, 
	109, 10, 101, 10, 121, 10, 97, 10, 
	110, 10, 103, 10, 119, 10, 97, 10, 
	101, 10, 97, 10, 118, 10, 101, 10, 
	32, 10, 116, 10, 111, 10, 101, 10, 
	116, 10, 32, 10, 103, 10, 111, 10, 
	32, 10, 97, 10, 110, 10, 100, 10, 
	32, 10, 104, 10, 97, 10, 117, 10, 
	108, 10, 104, 10, 105, 10, 118, 10, 
	101, 10, 114, 10, 32, 10, 109, 10, 
	101, 10, 32, 10, 116, 10, 105, 10, 
	109, 10, 98, 10, 101, 10, 114, 10, 
	115, 32, 124, 9, 13, 10, 32, 92, 
	124, 9, 13, 10, 92, 124, 10, 92, 
	10, 32, 92, 124, 9, 13, 10, 32, 
	34, 35, 37, 42, 64, 65, 66, 68, 
	71, 72, 76, 83, 89, 124, 9, 13, 
	10, 101, 10, 97, 10, 100, 10, 32, 
	10, 109, 10, 101, 10, 110, 10, 32, 
	10, 116, 10, 101, 10, 108, 10, 108, 
	10, 32, 10, 110, 10, 111, 10, 32, 
	10, 116, 10, 97, 10, 108, 10, 101, 
	10, 115, 10, 101, 10, 97, 10, 118, 
	10, 101, 10, 32, 10, 116, 10, 111, 
	10, 104, 10, 105, 10, 118, 10, 101, 
	10, 114, 10, 32, 10, 109, 10, 101, 
	10, 32, 10, 116, 10, 105, 10, 109, 
	10, 98, 10, 101, 10, 114, 10, 111, 
	10, 45, 10, 104, 10, 111, 10, 45, 
	10, 104, 97, 115, 116, 101, 187, 191, 
	0
];

const _lexer_single_lengths = [
	0, 17, 16, 1, 1, 2, 3, 3, 
	3, 3, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 3, 
	5, 3, 3, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 10, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 16, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	5, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 13, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 4, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 11, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 4, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 12, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 4, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 4, 3, 2, 4, 16, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 1, 1, 1, 0
];

const _lexer_range_lengths = [
	0, 1, 1, 0, 0, 1, 1, 1, 
	1, 1, 1, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	1, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 1, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 1, 0, 0, 1, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0
];

const _lexer_index_offsets = [
	0, 0, 19, 37, 39, 41, 45, 50, 
	55, 60, 65, 69, 73, 76, 78, 80, 
	82, 84, 86, 88, 90, 92, 94, 96, 
	98, 100, 102, 104, 106, 108, 110, 113, 
	118, 125, 130, 134, 136, 138, 140, 142, 
	144, 146, 148, 150, 152, 154, 156, 158, 
	170, 173, 176, 179, 182, 185, 188, 191, 
	194, 197, 200, 203, 206, 209, 212, 215, 
	218, 221, 224, 227, 230, 233, 236, 239, 
	242, 245, 263, 265, 267, 269, 271, 273, 
	275, 277, 279, 281, 283, 285, 287, 289, 
	291, 293, 295, 297, 299, 301, 303, 305, 
	307, 309, 311, 313, 315, 317, 319, 321, 
	323, 330, 333, 336, 339, 342, 345, 348, 
	351, 354, 357, 360, 363, 365, 367, 369, 
	371, 373, 375, 377, 379, 381, 383, 385, 
	387, 389, 391, 393, 408, 411, 414, 417, 
	420, 423, 426, 429, 432, 435, 438, 441, 
	444, 447, 450, 453, 458, 461, 464, 467, 
	470, 473, 476, 479, 482, 485, 488, 491, 
	494, 497, 500, 503, 506, 509, 512, 515, 
	518, 521, 524, 527, 530, 533, 536, 539, 
	542, 545, 548, 551, 554, 557, 560, 563, 
	566, 569, 572, 575, 578, 581, 584, 587, 
	590, 593, 596, 599, 602, 605, 608, 611, 
	614, 617, 620, 623, 626, 629, 632, 635, 
	638, 641, 644, 647, 650, 653, 656, 659, 
	662, 664, 666, 668, 670, 672, 674, 676, 
	678, 680, 682, 684, 686, 688, 690, 692, 
	694, 696, 698, 700, 702, 704, 706, 708, 
	710, 712, 714, 716, 718, 720, 722, 724, 
	726, 728, 741, 744, 747, 750, 753, 756, 
	759, 762, 765, 768, 771, 774, 777, 780, 
	783, 786, 791, 794, 797, 800, 803, 806, 
	809, 812, 815, 818, 821, 824, 827, 830, 
	833, 836, 839, 842, 845, 848, 851, 854, 
	857, 860, 863, 866, 869, 872, 875, 878, 
	881, 884, 887, 890, 893, 896, 899, 902, 
	905, 908, 911, 914, 917, 920, 923, 926, 
	929, 931, 933, 935, 937, 939, 941, 943, 
	945, 947, 949, 963, 966, 969, 972, 975, 
	978, 981, 984, 987, 990, 993, 996, 999, 
	1002, 1005, 1008, 1013, 1016, 1019, 1022, 1025, 
	1028, 1031, 1034, 1037, 1040, 1043, 1046, 1049, 
	1052, 1055, 1058, 1061, 1064, 1067, 1070, 1073, 
	1076, 1079, 1082, 1085, 1088, 1091, 1094, 1097, 
	1100, 1103, 1106, 1109, 1112, 1115, 1118, 1121, 
	1124, 1127, 1130, 1133, 1136, 1139, 1142, 1145, 
	1148, 1151, 1154, 1157, 1160, 1163, 1166, 1169, 
	1172, 1175, 1178, 1181, 1184, 1187, 1190, 1193, 
	1196, 1199, 1203, 1209, 1213, 1216, 1222, 1240, 
	1243, 1246, 1249, 1252, 1255, 1258, 1261, 1264, 
	1267, 1270, 1273, 1276, 1279, 1282, 1285, 1288, 
	1291, 1294, 1297, 1300, 1303, 1306, 1309, 1312, 
	1315, 1318, 1321, 1324, 1327, 1330, 1333, 1336, 
	1339, 1342, 1345, 1348, 1351, 1354, 1357, 1360, 
	1363, 1366, 1369, 1372, 1375, 1378, 1381, 1384, 
	1387, 1389, 1391, 1393, 1395, 1397, 1399
];

const _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 15, 16, 
	17, 1, 0, 2, 1, 3, 4, 5, 
	6, 7, 8, 9, 10, 11, 12, 13, 
	14, 15, 16, 1, 0, 18, 0, 19, 
	0, 20, 19, 19, 0, 23, 22, 24, 
	22, 21, 27, 26, 28, 26, 25, 27, 
	26, 29, 26, 25, 27, 26, 30, 26, 
	25, 32, 31, 31, 0, 2, 33, 33, 
	0, 35, 36, 34, 2, 0, 37, 0, 
	38, 0, 39, 0, 40, 0, 41, 0, 
	42, 0, 43, 0, 44, 0, 45, 0, 
	46, 0, 47, 0, 48, 0, 49, 0, 
	50, 0, 51, 0, 0, 52, 54, 55, 
	53, 0, 0, 0, 0, 56, 57, 58, 
	57, 57, 60, 59, 56, 2, 61, 7, 
	61, 0, 62, 63, 64, 0, 65, 0, 
	66, 0, 67, 0, 68, 0, 69, 0, 
	70, 0, 71, 0, 72, 0, 73, 0, 
	74, 0, 76, 75, 78, 77, 78, 79, 
	80, 81, 80, 82, 83, 84, 85, 86, 
	79, 77, 78, 87, 77, 78, 88, 77, 
	78, 89, 77, 78, 90, 77, 78, 91, 
	77, 78, 92, 77, 78, 93, 77, 78, 
	94, 77, 78, 95, 77, 78, 96, 77, 
	78, 97, 77, 78, 98, 77, 78, 99, 
	77, 78, 100, 77, 78, 101, 77, 78, 
	102, 77, 78, 103, 77, 78, 104, 77, 
	78, 105, 77, 78, 106, 77, 78, 107, 
	77, 78, 108, 77, 78, 109, 77, 78, 
	110, 77, 78, 111, 77, 113, 112, 114, 
	115, 116, 117, 118, 119, 120, 121, 122, 
	123, 124, 125, 126, 127, 112, 0, 128, 
	0, 129, 0, 130, 0, 131, 0, 132, 
	0, 133, 0, 134, 0, 135, 0, 136, 
	0, 137, 0, 138, 0, 139, 0, 140, 
	0, 141, 0, 142, 0, 143, 0, 144, 
	0, 145, 0, 146, 0, 147, 0, 148, 
	0, 149, 0, 150, 0, 151, 0, 152, 
	0, 153, 0, 154, 0, 155, 0, 157, 
	156, 159, 158, 159, 160, 161, 162, 161, 
	160, 158, 159, 163, 158, 159, 164, 158, 
	159, 165, 158, 159, 166, 158, 159, 167, 
	158, 159, 168, 158, 159, 169, 158, 159, 
	170, 158, 159, 171, 158, 159, 172, 158, 
	159, 173, 158, 174, 0, 175, 0, 176, 
	0, 177, 0, 131, 0, 178, 0, 179, 
	0, 180, 0, 181, 0, 182, 0, 183, 
	0, 184, 0, 185, 0, 187, 186, 189, 
	188, 189, 190, 191, 192, 193, 191, 194, 
	195, 196, 197, 198, 199, 200, 190, 188, 
	189, 201, 188, 189, 202, 188, 189, 203, 
	188, 189, 204, 188, 189, 205, 188, 189, 
	206, 188, 189, 207, 188, 189, 208, 188, 
	189, 209, 188, 189, 210, 188, 189, 211, 
	188, 189, 212, 188, 189, 213, 188, 189, 
	214, 188, 189, 215, 188, 189, 216, 217, 
	218, 188, 189, 219, 188, 189, 220, 188, 
	189, 221, 188, 189, 222, 188, 189, 223, 
	188, 189, 224, 188, 189, 225, 188, 189, 
	226, 188, 189, 227, 188, 189, 215, 188, 
	189, 228, 188, 189, 229, 188, 189, 230, 
	188, 189, 231, 188, 189, 231, 188, 189, 
	232, 188, 189, 233, 188, 189, 234, 188, 
	189, 235, 188, 189, 230, 188, 189, 236, 
	188, 189, 237, 188, 189, 238, 188, 189, 
	239, 188, 189, 235, 188, 189, 240, 188, 
	189, 241, 188, 189, 242, 188, 189, 243, 
	188, 189, 244, 188, 189, 245, 188, 189, 
	227, 188, 189, 246, 188, 189, 247, 188, 
	189, 248, 188, 189, 249, 188, 189, 250, 
	188, 189, 251, 188, 189, 252, 188, 189, 
	253, 188, 189, 254, 188, 189, 255, 188, 
	189, 256, 188, 189, 257, 188, 189, 258, 
	188, 189, 231, 188, 189, 259, 188, 189, 
	260, 188, 189, 261, 188, 189, 262, 188, 
	189, 263, 188, 189, 264, 188, 189, 265, 
	188, 189, 266, 188, 189, 267, 188, 189, 
	268, 188, 189, 269, 188, 189, 270, 188, 
	189, 271, 188, 189, 272, 188, 189, 273, 
	188, 189, 227, 188, 189, 274, 188, 189, 
	275, 188, 189, 276, 188, 189, 277, 188, 
	189, 278, 188, 189, 245, 188, 279, 0, 
	280, 0, 281, 0, 282, 0, 283, 0, 
	284, 0, 285, 0, 286, 0, 287, 0, 
	288, 0, 289, 0, 290, 0, 291, 0, 
	133, 0, 292, 0, 293, 0, 294, 0, 
	295, 0, 296, 0, 297, 0, 298, 0, 
	299, 0, 300, 0, 301, 0, 302, 0, 
	303, 0, 304, 0, 305, 0, 306, 0, 
	307, 0, 308, 0, 310, 309, 312, 311, 
	312, 313, 314, 315, 316, 314, 317, 318, 
	319, 320, 321, 313, 311, 312, 322, 311, 
	312, 323, 311, 312, 324, 311, 312, 325, 
	311, 312, 326, 311, 312, 327, 311, 312, 
	328, 311, 312, 329, 311, 312, 330, 311, 
	312, 331, 311, 312, 332, 311, 312, 333, 
	311, 312, 334, 311, 312, 335, 311, 312, 
	336, 311, 312, 337, 338, 339, 311, 312, 
	340, 311, 312, 341, 311, 312, 342, 311, 
	312, 343, 311, 312, 344, 311, 312, 345, 
	311, 312, 346, 311, 312, 347, 311, 312, 
	348, 311, 312, 336, 311, 312, 349, 311, 
	312, 350, 311, 312, 351, 311, 312, 352, 
	311, 312, 352, 311, 312, 353, 311, 312, 
	354, 311, 312, 355, 311, 312, 356, 311, 
	312, 351, 311, 312, 357, 311, 312, 358, 
	311, 312, 359, 311, 312, 360, 311, 312, 
	356, 311, 312, 361, 311, 312, 362, 311, 
	312, 363, 311, 312, 364, 311, 312, 365, 
	311, 312, 366, 311, 312, 348, 311, 312, 
	367, 311, 312, 368, 311, 312, 369, 311, 
	312, 370, 311, 312, 371, 311, 312, 372, 
	311, 312, 373, 311, 312, 374, 311, 312, 
	375, 311, 312, 376, 311, 312, 377, 311, 
	312, 378, 311, 312, 379, 311, 312, 352, 
	311, 380, 0, 381, 0, 382, 0, 383, 
	0, 384, 0, 385, 0, 386, 0, 387, 
	0, 389, 388, 391, 390, 391, 392, 393, 
	394, 395, 393, 396, 397, 398, 399, 400, 
	401, 392, 390, 391, 402, 390, 391, 403, 
	390, 391, 404, 390, 391, 405, 390, 391, 
	406, 390, 391, 407, 390, 391, 408, 390, 
	391, 409, 390, 391, 410, 390, 391, 411, 
	390, 391, 412, 390, 391, 413, 390, 391, 
	414, 390, 391, 415, 390, 391, 416, 390, 
	391, 417, 418, 419, 390, 391, 420, 390, 
	391, 421, 390, 391, 422, 390, 391, 423, 
	390, 391, 424, 390, 391, 425, 390, 391, 
	426, 390, 391, 427, 390, 391, 428, 390, 
	391, 416, 390, 391, 429, 390, 391, 430, 
	390, 391, 431, 390, 391, 432, 390, 391, 
	432, 390, 391, 433, 390, 391, 434, 390, 
	391, 435, 390, 391, 436, 390, 391, 431, 
	390, 391, 437, 390, 391, 438, 390, 391, 
	439, 390, 391, 440, 390, 391, 436, 390, 
	391, 441, 390, 391, 442, 390, 391, 443, 
	390, 391, 444, 390, 391, 445, 390, 391, 
	446, 390, 391, 428, 390, 391, 447, 390, 
	391, 448, 390, 391, 449, 390, 391, 450, 
	390, 391, 451, 390, 391, 452, 390, 391, 
	453, 390, 391, 454, 390, 391, 455, 390, 
	391, 456, 390, 391, 457, 390, 391, 458, 
	390, 391, 459, 390, 391, 432, 390, 391, 
	460, 390, 391, 461, 390, 391, 462, 390, 
	391, 463, 390, 391, 464, 390, 391, 465, 
	390, 391, 466, 390, 391, 467, 390, 391, 
	468, 390, 391, 469, 390, 391, 470, 390, 
	391, 471, 390, 391, 472, 390, 391, 473, 
	390, 391, 474, 390, 391, 428, 390, 475, 
	476, 475, 0, 479, 478, 480, 481, 478, 
	477, 0, 483, 484, 482, 0, 483, 482, 
	479, 485, 483, 484, 485, 482, 479, 486, 
	487, 488, 489, 490, 491, 492, 493, 494, 
	495, 496, 497, 498, 499, 500, 486, 0, 
	78, 501, 77, 78, 502, 77, 78, 503, 
	77, 78, 504, 77, 78, 505, 77, 78, 
	506, 77, 78, 507, 77, 78, 508, 77, 
	78, 509, 77, 78, 510, 77, 78, 511, 
	77, 78, 512, 77, 78, 513, 77, 78, 
	514, 77, 78, 515, 77, 78, 516, 77, 
	78, 517, 77, 78, 518, 77, 78, 519, 
	77, 78, 520, 77, 78, 110, 77, 78, 
	521, 77, 78, 522, 77, 78, 523, 77, 
	78, 524, 77, 78, 525, 77, 78, 526, 
	77, 78, 110, 77, 78, 527, 77, 78, 
	528, 77, 78, 529, 77, 78, 530, 77, 
	78, 531, 77, 78, 532, 77, 78, 533, 
	77, 78, 534, 77, 78, 535, 77, 78, 
	536, 77, 78, 537, 77, 78, 538, 77, 
	78, 539, 77, 78, 540, 77, 78, 520, 
	77, 78, 541, 77, 78, 542, 77, 78, 
	543, 77, 78, 544, 77, 78, 545, 77, 
	78, 526, 77, 546, 0, 547, 0, 132, 
	0, 133, 0, 548, 0, 1, 0, 549, 
	0
];

const _lexer_trans_targs = [
	0, 2, 2, 3, 12, 14, 28, 31, 
	34, 74, 80, 116, 121, 216, 230, 312, 
	401, 460, 4, 5, 6, 7, 7, 7, 
	8, 7, 7, 7, 8, 9, 10, 11, 
	2, 11, 12, 2, 13, 15, 16, 17, 
	18, 19, 20, 21, 22, 23, 24, 25, 
	26, 27, 462, 29, 30, 30, 2, 13, 
	32, 33, 2, 32, 31, 33, 35, 456, 
	459, 36, 37, 38, 39, 40, 41, 42, 
	43, 44, 45, 46, 47, 46, 47, 47, 
	2, 48, 62, 407, 428, 435, 450, 49, 
	50, 51, 52, 53, 54, 55, 56, 57, 
	58, 59, 60, 61, 2, 63, 64, 65, 
	66, 67, 68, 69, 70, 71, 72, 73, 
	2, 2, 3, 12, 14, 28, 31, 34, 
	74, 80, 116, 121, 216, 230, 312, 401, 
	75, 76, 77, 78, 79, 28, 81, 82, 
	83, 84, 85, 86, 87, 88, 89, 90, 
	91, 92, 93, 94, 95, 96, 97, 98, 
	99, 100, 101, 102, 103, 104, 103, 104, 
	104, 2, 105, 106, 107, 108, 109, 110, 
	111, 112, 113, 114, 115, 73, 117, 118, 
	119, 120, 122, 123, 124, 125, 126, 127, 
	128, 129, 130, 131, 130, 131, 131, 2, 
	132, 146, 147, 163, 168, 173, 180, 194, 
	210, 133, 134, 135, 136, 137, 138, 139, 
	140, 141, 142, 143, 144, 145, 2, 73, 
	148, 158, 162, 149, 150, 151, 152, 153, 
	154, 155, 156, 157, 159, 160, 161, 146, 
	164, 165, 166, 167, 169, 170, 171, 172, 
	174, 175, 176, 177, 178, 179, 181, 182, 
	183, 184, 185, 186, 187, 188, 189, 190, 
	191, 192, 193, 195, 196, 197, 198, 199, 
	200, 201, 202, 203, 204, 205, 206, 207, 
	208, 209, 211, 212, 213, 214, 215, 217, 
	218, 219, 220, 221, 222, 223, 224, 225, 
	226, 227, 228, 229, 231, 232, 233, 234, 
	235, 236, 237, 238, 239, 240, 241, 242, 
	243, 244, 245, 246, 247, 248, 249, 248, 
	249, 249, 2, 250, 264, 265, 281, 286, 
	291, 298, 251, 252, 253, 254, 255, 256, 
	257, 258, 259, 260, 261, 262, 263, 2, 
	73, 266, 276, 280, 267, 268, 269, 270, 
	271, 272, 273, 274, 275, 277, 278, 279, 
	264, 282, 283, 284, 285, 287, 288, 289, 
	290, 292, 293, 294, 295, 296, 297, 299, 
	300, 301, 302, 303, 304, 305, 306, 307, 
	308, 309, 310, 311, 313, 314, 315, 316, 
	317, 318, 319, 320, 321, 322, 321, 322, 
	322, 2, 323, 337, 338, 354, 359, 364, 
	371, 385, 324, 325, 326, 327, 328, 329, 
	330, 331, 332, 333, 334, 335, 336, 2, 
	73, 339, 349, 353, 340, 341, 342, 343, 
	344, 345, 346, 347, 348, 350, 351, 352, 
	337, 355, 356, 357, 358, 360, 361, 362, 
	363, 365, 366, 367, 368, 369, 370, 372, 
	373, 374, 375, 376, 377, 378, 379, 380, 
	381, 382, 383, 384, 386, 387, 388, 389, 
	390, 391, 392, 393, 394, 395, 396, 397, 
	398, 399, 400, 401, 402, 403, 405, 406, 
	404, 402, 403, 404, 402, 405, 406, 3, 
	12, 14, 28, 31, 34, 74, 80, 116, 
	121, 216, 230, 312, 401, 408, 409, 410, 
	411, 412, 413, 414, 415, 416, 417, 418, 
	419, 420, 421, 422, 423, 424, 425, 426, 
	427, 429, 430, 431, 432, 433, 434, 436, 
	437, 438, 439, 440, 441, 442, 443, 444, 
	445, 446, 447, 448, 449, 451, 452, 453, 
	454, 455, 457, 458, 461, 0
];

const _lexer_trans_actions = [
	39, 0, 47, 3, 1, 0, 25, 1, 
	25, 25, 25, 25, 25, 25, 25, 25, 
	31, 0, 0, 0, 47, 5, 41, 119, 
	41, 0, 29, 111, 29, 29, 0, 7, 
	95, 0, 0, 103, 21, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 0, 99, 19, 
	0, 23, 107, 23, 44, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 50, 124, 0, 47, 0, 
	62, 29, 77, 77, 77, 77, 77, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 9, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 9, 
	27, 115, 53, 50, 27, 56, 50, 56, 
	56, 56, 56, 56, 56, 56, 56, 59, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 124, 0, 47, 
	0, 74, 77, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 17, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 50, 124, 0, 47, 0, 68, 
	29, 77, 77, 77, 77, 77, 77, 77, 
	77, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 13, 13, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 50, 124, 0, 
	47, 0, 71, 29, 77, 77, 77, 77, 
	77, 77, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 15, 
	15, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 124, 0, 47, 
	0, 65, 29, 77, 77, 77, 77, 77, 
	77, 77, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 11, 
	11, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 33, 33, 47, 
	33, 80, 0, 0, 35, 0, 0, 86, 
	83, 37, 89, 83, 89, 89, 89, 89, 
	89, 89, 89, 89, 92, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0
];

const _lexer_eof_actions = [
	0, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39
];

const lexer_start = 1;
const lexer_first_final = 462;
const lexer_error = 0;

const lexer_en_main = 1;


/* line 120 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

/* line 121 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

/* line 122 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

var Lexer = function(listener) {
  // Check that listener has the required functions
  var events = ['comment', 'tag', 'feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'py_string', 'row', 'eof'];
  for(e in events) {
    var event = events[e];
    if(typeof listener[event] != 'function') {
      "Error. No " + event + " function exists on " + JSON.stringify(listener);
    }
  }
  this.listener = listener;  
};

Lexer.prototype.scan = function(data) {
  var ending = "\n%_FEATURE_END_%";
  if(typeof data == 'string') {
    data = this.stringToBytes(data + ending);
  } else if(typeof Buffer != 'undefined' && Buffer.isBuffer(data)) {
    // Node.js
    var buf = new Buffer(data.length + ending.length);
    data.copy(buf, 0, 0);
    new Buffer(ending).copy(buf, data.length, 0);
    data = buf;
  }
  var eof = pe = data.length;
  var p = 0;

  this.line_number = 1;
  this.last_newline = 0;

  
/* line 827 "js/lib/gherkin/lexer/en_pirate.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 153 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */
  
/* line 834 "js/lib/gherkin/lexer/en_pirate.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if ( data[p] < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if ( data[p] > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if ( data[p] < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if ( data[p] > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*$/, '').replace(/\\\"\\\"\\\"/mg, '"""')
    );
    this.listener.py_string(con, this.current_line); 
  		break;
case 4:
/* line 29 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 5:
/* line 33 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 6:
/* line 37 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 7:
/* line 41 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 8:
/* line 45 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 9:
/* line 49 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.step(this.keyword, con, this.current_line);
  		break;
case 10:
/* line 54 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.comment(con, this.line_number);
    this.keyword_start = null;
  		break;
case 11:
/* line 60 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.tag(con, this.line_number);
    this.keyword_start = null;
  		break;
case 12:
/* line 66 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.line_number++;
  		break;
case 13:
/* line 70 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.last_newline = p + 1;
  		break;
case 14:
/* line 74 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 15:
/* line 78 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 16:
/* line 83 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.next_keyword_start = p;
  		break;
case 17:
/* line 87 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 18:
/* line 93 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.content_start = p;
  		break;
case 19:
/* line 97 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 20:
/* line 102 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    this.listener.row(current_row, this.current_line);
  		break;
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 1050 "js/lib/gherkin/lexer/en_pirate.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 1089 "js/lib/gherkin/lexer/en_pirate.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 154 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/en_pirate.js.rl" */
};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  } else {
    var result = "";
    for(var b in bytes) {
      result += String.fromCharCode(bytes[b]);
    }
    return result;
  }
};

Lexer.prototype.stringToBytes = function(string) {
  var bytes = [];
  for(var i = 0; i < string.length; i++) {
    bytes[i] = string.charCodeAt(i);
  }
  return bytes;
};

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).trimRight();
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.listener[event](this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

Lexer.prototype.current_line_content = function(data, p) {
  var rest = data.slice(this.last_newline, -1);
  var end = rest.indexOf(10) || -1;
  return this.bytesToString(rest.slice(0, end)).trim();
};

if(typeof exports != 'undefined') {
  exports.Lexer = Lexer;
}
if(typeof window != 'undefined') {
  window.Lexer = Lexer;
}

})();
