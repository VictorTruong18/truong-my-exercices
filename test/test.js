import { assert } from 'chai';
import { my_sum } from './../day-1/exercise-0.js';
import { my_display_alpha } from './../day-1/exercise-1.js';


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