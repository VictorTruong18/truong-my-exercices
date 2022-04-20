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
      it('should return 0 when no values in either one', function () {
        assert.equal(0, my_sum());
        assert.equal(0, my_sum(1));
    });
    it('should return 0 if not numbers', function () {
        assert.equal(0, my_sum("toto", "tata"));
        assert.equal(0, my_sum(undefined, "zizi"));
        assert.equal(0, my_sum(15, undefined));
        assert.equal(0, my_sum(undefined, 15));
    });
    it('good result', function() {
        assert.equal(4, my_sum(2, 2));
        assert.equal(-4, my_sum(-2, -2));
        assert.equal(1, my_sum(4, -3));
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
      it ('Should return 0 if not a string', function() {
        assert.equal(0, my_size_alpha(69));
        assert.equal(0, my_size_alpha(undefined));
        assert.equal(0, my_size_alpha(true));
    });
    it ('Return number of letters', function() {
        
        
        assert.equal(5, my_size_alpha("5tot5ot5"));
    });

    });
  });


  describe('exercise-5', function () {
    describe('my_array_alpha', function () {
      it('returns letter', function () {
        assert.deepEqual(['t', 'o', 't', 'o', 't'], my_array_alpha("totot"));
      });
      it ('Should return empty if not a string', function() {
        assert.isEmpty(my_array_alpha(69));
        assert.isEmpty(my_array_alpha(undefined));
        assert.isEmpty(my_array_alpha(true));
    })
    it ('Return letters', function() {
        assert.isEmpty(my_array_alpha(""));
        assert.isEmpty(my_array_alpha("1234"));
        assert.deepEqual(['t', 'o', 't', 'o', 't'], my_array_alpha("totot"))
        assert.deepEqual(['t', 'o', 't', 'o', 't'], my_array_alpha("5tot5ot5"))
    })

    });
    
  });

  describe('exercise-6', function () {
    describe('my_length_array', function () {
      it('returns letter', function () {
        assert.deepEqual(my_length_array(['t', 'o', 't', 'o', 't']), 5);
      });
      it ('Return length', function() {
        assert.equal(0, my_length_array([]))
        assert.equal(6, my_length_array([1, 2, 3, 4, 5, 6]))
    })

    });
  });

  describe('exercise-7', function () {
    describe('my_is_posi_neg NEGATIF', function () {
      it('returns NEGATIVE', function () {
        assert.equal(my_is_posi_neg(-2),"NEGATIF" );
      });
    });
    describe('my_is_posi_neg POSITIF', function () {
        it('returns NEGATIVE', function () {
          assert.equal(my_is_posi_neg(2),"POSITIF" );
        });
    });
    describe('my_is_posi_neg NEUTRAL', function () {
        it('returns NEUTRAL', function () {
          assert.equal(my_is_posi_neg(0),"NEUTRAL" );
        });
        it ('Return positive_negative', function() {
            assert.equal("POSITIF", my_is_posi_neg(69));
            assert.equal("NEGATIF", my_is_posi_neg(-69));
            assert.equal("NEUTRAL", my_is_posi_neg(0));
            assert.equal("POSITIF", my_is_posi_neg());
        })
    
    });
  });



 