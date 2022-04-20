import { assert } from 'chai';
import { my_sum } from './../day-1/exercise-0.js';
import { my_display_alpha } from './../day-1/exercise-1.js';
import { my_display_alpha_reverse } from './../day-1/exercise-2.js';
import { my_alpha_number } from './../day-1/exercise-3.js';
import { my_size_alpha } from './../day-1/exercise-4.js';
import { my_array_alpha } from './../day-1/exercise-5.js';
import { my_length_array } from './../day-1/exercise-6.js';
import { my_is_posi_neg } from './../day-1/exercise-7.js';

describe('exercise-0', function () {
    describe('my_sum_success', function () {
      it('Sums 20+22 = 42', function () {
        assert.equal(my_sum(20,22), 42);
      });
      it('Sums 0+0 = 0', function () {
        assert.equal(my_sum(0,0), 0);
      });
      it('Sums 444+56 = 500', function () {
        assert.equal(my_sum(444,56), 500);
      });
    });
    describe('my_sum_exception', function () {
        it('Wrong input', function () {
          assert.equal(my_sum("20","22"), 0);
        });
      });
  });

describe('exercise-1', function () {
    describe('my_display_alpha', function () {
      it('Returns the alphabet as a single string', function () {
        assert.equal(my_display_alpha(), 'abcdefghijklmnopqrstuvwxyz');
      });
    });
  });

  describe('exercise-2', function () {
    describe('my_display_alpha_reverse', function () {
      it('Returns the alphabet as a single string in reverse', function () {
        assert.equal(my_display_alpha_reverse(), 'zyxwvutsrqponmlkjihgfedcba');
      });
    });
  });

  describe('exercise-3', function () {
    describe('my_alpha_number', function () {
      it('Converts a number into a string', function () {
        assert.typeOf(my_alpha_number(5),"string");
      });
    });
  });

  describe('exercise-4', function () {
    describe('my_size_alpha', function () {
      it('Counts the right number of letters', function () {
        assert.equal(my_size_alpha("mabite"),6);
      });
    });
  });


  describe('exercise-5', function () {
    describe('my_array_alpha', function () {
      it('returns letter', function () {
        assert.deepEqual(['t', 'o', 't', 'o', 't'], my_array_alpha("totot"));
      });
    });
  });

  describe('exercise-6', function () {
    describe('my_length_array', function () {
      it('returns letter', function () {
        assert.deepEqual(my_length_array(['t', 'o', 't', 'o', 't']), 5);
      });
    });
  });


 