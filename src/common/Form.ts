import { observable } from 'mobx';
import * as React from 'react';

/**
 * Provides support for forms data.
 */
export class Form {

    /**
     * Form fields data.
     */
    @observable fields = {};

    /**
     * Flag says if any of form fields was changed.
     */
    wasFormChanged: boolean = false;

    /**
     * Event handler for propagation of view changes into form data.
     * @param changeEvent input change event.
     */
    onChange = (changeEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        let fieldName = changeEvent.target.name;
        if (fieldName) {
            let targetField = this.getField(fieldName);
            if (targetField !== undefined) {
                if (changeEvent.target.type === 'checkbox' && changeEvent.target instanceof HTMLInputElement) {
                    if (targetField instanceof Boolean || typeof (targetField) === 'boolean') {
                        this.setField(fieldName, (<HTMLInputElement>changeEvent.target).checked);
                    }
                } else if (targetField instanceof Number || typeof (targetField) === 'number') {
                    let targetValue = Number(changeEvent.target.value);
                    if (!isNaN(targetValue)) {
                        this.setField(fieldName, Number(changeEvent.target.value));
                    }
                } else if (targetField instanceof Boolean || typeof (targetField) === 'boolean') {
                    let targetValue = changeEvent.target.value.toLocaleLowerCase();
                    let boolValue = targetValue === 'true' || targetValue === 'yes' || targetValue === '1';
                    this.setField(fieldName, boolValue);
                } else {
                    this.setField(fieldName, changeEvent.target.value);
                }
                // Mark form as changed
                this.wasFormChanged = true;
            }
        }
    }

    private getField(fieldPath: string) {
        return this.fields[fieldPath];
    }

    private setField(fieldPath: string, value: any) {
        this.fields[fieldPath] = value;
        return this.fields[fieldPath];
    }
}